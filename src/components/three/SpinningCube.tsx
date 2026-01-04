import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

type Props = {
  width?: string | number
  height?: string | number
  rotationSpeed?: number // radians per frame
  color?: string // hex color string, e.g. '#ff0066'
  wireframe?: boolean
  autoRotate?: boolean
  enableOrbitControls?: boolean
}

export default function SpinningCube({
  width = '100%',
  height = '60vh',
  rotationSpeed = 0.01,
  color = '#4f46e5',
  wireframe = false,
  autoRotate = true,
  enableOrbitControls = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene & Camera
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#0b0b0b')
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    )
    camera.position.set(0, 0, 3)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(2, 3, 4)
    scene.add(dir)

    // Cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshStandardMaterial({ color, wireframe })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Orbit Controls
    const controls = enableOrbitControls ? new OrbitControls(camera, renderer.domElement) : undefined
    if (controls) {
      controls.enableDamping = true
      controls.dampingFactor = 0.05
    }

    // Hover scale feedback
    const onPointerEnter = () => { mesh.scale.set(1.05, 1.05, 1.05) }
    const onPointerLeave = () => { mesh.scale.set(1, 1, 1) }
    renderer.domElement.addEventListener('pointerenter', onPointerEnter)
    renderer.domElement.addEventListener('pointerleave', onPointerLeave)

    let raf = 0
    const tick = () => {
      if (autoRotate) {
        mesh.rotation.x += rotationSpeed
        mesh.rotation.y += rotationSpeed
      }
      controls?.update()
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onResize = () => {
      const { clientWidth, clientHeight } = container
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('pointerenter', onPointerEnter)
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave)
      controls?.dispose()
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [rotationSpeed, color, wireframe, autoRotate, enableOrbitControls])

  return (
    <div ref={containerRef} style={{ width, height }} className="rounded-lg overflow-hidden border bg-card" />
  )
}
