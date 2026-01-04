import * as THREE from 'three'
import { GridConfig, Vec, ViewMode } from '../game/types'

export function createCamera(grid: GridConfig) {
  const camera = new THREE.PerspectiveCamera(70, 1, 0.01, 100)
  camera.position.set(0, grid.camHeight, 0)
  camera.up.set(0, 1, 0)
  return camera
}

export function createCameraController(camera: THREE.PerspectiveCamera, grid: GridConfig) {
  const camPosLerp = new THREE.Vector3()
  const camLookLerp = new THREE.Vector3()
  
  // Position constants per 3D mode
  const CHASE_BACK_CELLS = 0.8         // how many cells behind head
  const CHASE_LIFT_CELLS = 1.5         // how many cells above ground
  const CHASE_LOOK_AHEAD_CELLS = 3.0   // how many cells ahead to look

  const FIRST_FORWARD_CELLS = 0.0      // small forward nudge relative to head if desired
  const FIRST_LOOK_AHEAD_CELLS = 1.0   // how many cells ahead to look


  const cellToWorld = (v: Vec) => new THREE.Vector3(v.x * grid.cell, grid.camHeight, v.y * grid.cell)

  return {
    reset(head: Vec) {
      const wp = cellToWorld(head)
      camPosLerp.copy(wp)
      camLookLerp.copy(wp)
    },
    update(head: Vec, dir: Vec, mode: ViewMode, dt: number) {
      const headWorld = cellToWorld(head)
      const forward = new THREE.Vector3(dir.x, 0, dir.y).normalize()
      const up = new THREE.Vector3(0, 1, 0)

      let targetPos = headWorld.clone()
      let targetLook = headWorld.clone()

      if (mode === 'chase') {
        const back = forward.clone().multiplyScalar(-CHASE_BACK_CELLS * grid.cell)
        const lift = up.clone().multiplyScalar(CHASE_LIFT_CELLS * grid.cell)
        targetPos.add(back).add(lift)
        targetLook.copy(headWorld)
        targetLook.add(forward.clone().multiplyScalar(CHASE_LOOK_AHEAD_CELLS * grid.cell))
        targetLook.y += 0.5 * grid.cell
      } else if (mode === 'first') {
        // optional slight forward nudge in first person
        if (FIRST_FORWARD_CELLS !== 0) targetPos.add(forward.clone().multiplyScalar(FIRST_FORWARD_CELLS * grid.cell))
        targetPos.y = grid.camHeight
        targetLook.add(forward.clone().multiplyScalar(FIRST_LOOK_AHEAD_CELLS * grid.cell))
      } else {
        // Top view is rendered via a separate 2D canvas; keep camera logic neutral
        // by not applying any special lift. Position/look stay near the head center.
        targetPos.copy(headWorld)
        targetLook.copy(headWorld)
      }

      // Smoothing values
      const ps = mode === 'first' ? 0.20 : mode === 'chase' ? 0.10 : 0.10
      const ls = mode === 'first' ? 0.50 : mode === 'chase' ? 0.10 : 0.10
      const posAlpha = 1 - Math.pow(1 - ps, dt * 60)
      const lookAlpha = 1 - Math.pow(1 - ls, dt * 60)
      camPosLerp.lerp(targetPos, posAlpha)
      camLookLerp.lerp(targetLook, lookAlpha)

      camera.position.copy(camPosLerp)
      if (mode === 'top') camera.up.set(0, 0, -1)
      else camera.up.set(0, 1, 0)
      camera.lookAt(camLookLerp)
    },
  }
}
