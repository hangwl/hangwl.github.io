import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { createInitialState, placeFood, tick, turnLeft, turnRight } from './game/engine'
import { GameState, GridConfig, ViewMode } from './game/types'
import { buildScene } from './three/scene'
import { createCamera, createCameraController } from './three/camera'
import { create2DRenderer } from './topview/twoDRenderer'

export function useSnake3D(grid: GridConfig) {
  const mountRef = useRef<HTMLDivElement>(null)
  const miniCanvasRef = useRef<HTMLCanvasElement>(null)

  const [state, setState] = useState<GameState>(() => createInitialState(grid))
  const [viewMode, setViewMode] = useState<ViewMode>('chase')
  const viewModeRef = useRef<ViewMode>('chase')
  useEffect(() => { viewModeRef.current = viewMode }, [viewMode])

  const [canvasH, setCanvasH] = useState<number>(520)

  // live state ref for RAF loop to avoid stale closures
  const stateRef = useRef<GameState>(state)
  useEffect(() => { stateRef.current = state }, [state])

  const runningRef = useRef(false)
  const hasStartedRef = useRef(false)
  const gameOverRef = useRef(false)
  const lastGameOverAtRef = useRef(0)
  useEffect(() => { runningRef.current = state.running }, [state.running])
  useEffect(() => { hasStartedRef.current = state.hasStarted }, [state.hasStarted])
  useEffect(() => {
    const was = gameOverRef.current
    gameOverRef.current = state.gameOver
    if (!was && state.gameOver) {
      // record the moment we entered game over
      lastGameOverAtRef.current = performance.now()
    }
  }, [state.gameOver])

  // three
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const scenePartsRef = useRef<ReturnType<typeof buildScene> | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const cameraCtlRef = useRef<ReturnType<typeof createCameraController> | null>(null)
  const segGeoRef = useRef<THREE.BoxGeometry | null>(null)
  const segMatRef = useRef<THREE.MeshStandardMaterial | null>(null)

  const TICK_MS = 100
  const lastTickRef = useRef(0)
  const prevTimeRef = useRef(0)

  const setupRenderer = useCallback((w: number, h: number) => {
    const m = mountRef.current!
    let renderer = rendererRef.current
    if (!renderer) {
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      m.appendChild(renderer.domElement)
      rendererRef.current = renderer
      // ensure canvas fills its parent absolutely-positioned container
      const el = renderer.domElement
      el.style.position = 'absolute'
      el.style.inset = '0'
      el.style.width = '100%'
      el.style.height = '100%'
    }
    renderer.setSize(w, h)
    const el = renderer.domElement
    el.style.width = '100%'
    el.style.height = '100%'
  }, [])

  const onResize = useCallback(() => {
    const mount = mountRef.current
    const camera = cameraRef.current
    if (!mount || !camera) return
    // robust width: fall back to parent width if absolute child has 0
    let w = mount.clientWidth
    if (!w && mount.parentElement) w = (mount.parentElement as HTMLElement).clientWidth
    const targetRatio = 0.62
    // When in fullscreen, expand to the full viewport size
    const isFs = !!document.fullscreenElement
    if (isFs) {
      const h = Math.max(1, window.innerHeight)
      const fsW = Math.max(1, window.innerWidth)
      camera.aspect = fsW / h
      camera.updateProjectionMatrix()
      setupRenderer(fsW, h)
      setCanvasH(h)
      if (miniCanvasRef.current) twoDRef.current?.resize(fsW, h)
      return
    }
    const maxH = Math.min(560, Math.floor(window.innerHeight * 0.8))
    const minH = 320
    const h = Math.max(minH, Math.min(maxH, Math.round(w * targetRatio)))
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    setupRenderer(w, h)
    setCanvasH(h)
    // 2D
    if (miniCanvasRef.current) twoDRef.current?.resize(w, h)
  }, [setupRenderer])

  const twoDRef = useRef<ReturnType<typeof create2DRenderer> | null>(null)

  const reset = useCallback(() => {
    setState(() => {
      const next = createInitialState(grid)
      // keep food placed within reset via placeFood
      placeFood(next, grid)
      // camera reset
      const head = next.snake[0]
      cameraCtlRef.current?.reset(head)
      lastTickRef.current = 0
      prevTimeRef.current = performance.now()
      return next
    })
  }, [grid])

  // ensure 2D renderer exists, is fresh, and sized when entering top view
  useEffect(() => {
    if (viewModeRef.current !== 'top') return
    const canvas = miniCanvasRef.current
    const mount = mountRef.current
    if (!canvas || !mount) return
    // Always recreate to avoid stale context when canvas was unmounted
    if (twoDRef.current?.dispose) twoDRef.current.dispose()
    twoDRef.current = create2DRenderer(canvas, grid)
    // compute width similarly to onResize
    let w = mount.clientWidth
    if (!w && mount.parentElement) w = (mount.parentElement as HTMLElement).clientWidth
    twoDRef.current.resize(w, canvasH)
    // draw once immediately
    twoDRef.current.render(stateRef.current)
  }, [grid, canvasH, viewMode])

  // (start handled via onCanvasClick/space)

  // input
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === ' ') {
        e.preventDefault()
        setState((s) => {
          if (s.gameOver) return s
          if (!s.hasStarted) return { ...s, hasStarted: true, running: true }
          return { ...s, running: !s.running }
        })
        return
      }
      if (k === 'r') {
        // prevent accidental restart within 1s of game over
        const now = performance.now()
        if (gameOverRef.current && now - lastGameOverAtRef.current < 1000) {
          return
        }
        reset();
        return
      }
      if (k === 'arrowleft' || k === 'a') {
        setState((s) => ({ ...s, pendingDir: turnLeft(s.dir) }))
      } else if (k === 'arrowright' || k === 'd') {
        setState((s) => ({ ...s, pendingDir: turnRight(s.dir) }))
      } else if (k === 'v') {
        setViewMode((m) => (m === 'chase' ? 'first' : m === 'first' ? 'top' : 'chase'))
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [reset])

  // mount three
  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // scene
    const parts = buildScene(grid)
    scenePartsRef.current = parts

    // materials for segments
    segGeoRef.current = new THREE.BoxGeometry(0.8 * grid.cell, 0.8 * grid.cell, 0.8 * grid.cell)
    segMatRef.current = new THREE.MeshStandardMaterial({ color: new THREE.Color('#22c55e'), metalness: 0.0, roughness: 1.0 })

    // camera
    const cam = createCamera(grid)
    cameraRef.current = cam
    const ctl = createCameraController(cam, grid)
    cameraCtlRef.current = ctl

    setupRenderer(mount.clientWidth, 520)

    // 2D renderer (may be created later when top view is shown)
    if (miniCanvasRef.current) twoDRef.current = create2DRenderer(miniCanvasRef.current, grid)

    const resizeHandler = () => onResize()
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    // Ensure fullscreen transitions trigger a resize
    document.addEventListener('fullscreenchange', resizeHandler)

    // initial food and camera reset
    setState((s) => {
      const next = { ...s }
      placeFood(next, grid)
      ctl.reset(next.snake[0])
      return next
    })

    let raf = 0
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop)
      const renderer = rendererRef.current!
      const camera = cameraRef.current!
      const { scene, snakeGroup, headMesh, foodMesh } = scenePartsRef.current!

      const prev = prevTimeRef.current || t
      const dt = Math.max(0, (t - prev) / 1000)
      prevTimeRef.current = t

      const live = stateRef.current
      if (live.running && live.hasStarted && !live.gameOver && t - lastTickRef.current >= TICK_MS) {
        lastTickRef.current = t
        // mutate a shallow copy for React state, but keep stateRef in sync
        const next: GameState = { ...live, snake: [...live.snake] }
        tick(next, grid)
        stateRef.current = next
        setState(next)
      }

      // sync food every frame from current state
      const foodPos = stateRef.current.food
      foodMesh.position.set(foodPos.x * grid.cell, grid.camHeight, foodPos.y * grid.cell)

      const headCell = stateRef.current.snake[0]
      if (headCell) {
        cameraCtlRef.current?.update(headCell, stateRef.current.dir, viewModeRef.current, dt)
      }

      // sync snake meshes
      if (segGeoRef.current && segMatRef.current) {
        const need = Math.max(0, stateRef.current.snake.length - 1)
        while (snakeGroup.children.length < need) {
          const mesh = new THREE.Mesh(segGeoRef.current, segMatRef.current)
          snakeGroup.add(mesh)
        }
        while (snakeGroup.children.length > need) {
          const child = snakeGroup.children.pop() as THREE.Mesh
          child.geometry = new THREE.BoxGeometry(0, 0, 0)
        }
        for (let i = 1; i < stateRef.current.snake.length; i++) {
          const seg = stateRef.current.snake[i]
          const mesh = snakeGroup.children[i - 1] as THREE.Mesh
          mesh.position.set(seg.x * grid.cell, (0.8 * grid.cell) / 2, seg.y * grid.cell)
        }
      }

      // head
      const head = stateRef.current.snake[0]
      if (head) {
        headMesh.position.set(head.x * grid.cell, (0.9 * grid.cell) / 2, head.y * grid.cell)
        headMesh.visible = viewModeRef.current !== 'first'
      }

      if (viewModeRef.current === 'top') {
        twoDRef.current?.render(stateRef.current)
      }

      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resizeHandler)
      document.removeEventListener('fullscreenchange', resizeHandler)
      // dispose
      rendererRef.current?.dispose()
      parts.cleanup()
      const m = mountRef.current
      if (m && rendererRef.current) m.removeChild(rendererRef.current.domElement)
      rendererRef.current = null
      segGeoRef.current?.dispose(); segGeoRef.current = null
      segMatRef.current?.dispose(); segMatRef.current = null
    }
  // intentionally exclude state in deps to avoid restarting loop constantly
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid])

  const onCanvasClick = useCallback(() => {
    // prevent accidental restart within 1s of game over
    const now = performance.now()
    if (gameOverRef.current && now - lastGameOverAtRef.current < 1000) {
      return
    }
    setState((s) => {
      if (s.gameOver) {
        const next = createInitialState(grid)
        placeFood(next, grid)
        return next
      }
      if (!s.hasStarted) return { ...s, hasStarted: true, running: true }
      return { ...s, running: !s.running }
    })
  }, [grid])

  const onTurnLeft = useCallback(() => setState((s) => ({ ...s, pendingDir: turnLeft(s.dir) })), [])
  const onTurnRight = useCallback(() => setState((s) => ({ ...s, pendingDir: turnRight(s.dir) })), [])
  const onCycleView = useCallback(() => setViewMode((m) => (m === 'chase' ? 'first' : m === 'first' ? 'top' : 'chase')), [])

  return {
    mountRef,
    miniCanvasRef,
    state,
    setState,
    viewMode,
    setViewMode,
    canvasH,
    onCanvasClick,
    onTurnLeft,
    onTurnRight,
    onCycleView,
  }
}
