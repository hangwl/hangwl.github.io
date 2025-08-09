import * as THREE from 'three'
import { GridConfig } from '../game/types'

export type SceneParts = {
  scene: THREE.Scene
  snakeGroup: THREE.Group
  headMesh: THREE.Mesh
  foodMesh: THREE.Mesh
  cleanup: () => void
}

export function buildScene(grid: GridConfig): SceneParts {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#0b0b0b')

  // camera will be provided externally; this builds world only
  const ambient = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambient)
  const dir = new THREE.DirectionalLight(0xffffff, 1)
  dir.position.set(5, 10, 7)
  scene.add(dir)

  const gridHelper = new THREE.GridHelper(grid.rows * grid.cell, grid.rows, 0x222222, 0x1b1b1b)
  gridHelper.position.set(((grid.cols - 1) * grid.cell) / 2, 0, ((grid.rows - 1) * grid.cell) / 2)
  scene.add(gridHelper)

  // walls
  const walls = new THREE.Group()
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x3b3b3b, metalness: 0.1, roughness: 0.9 })
  const wallH = 0.8
  const makeWall = (w: number, d: number, x: number, z: number) => {
    const geo = new THREE.BoxGeometry(w, wallH, d)
    const m = new THREE.Mesh(geo, wallMat)
    m.position.set(x, wallH / 2, z)
    walls.add(m)
  }
  const W = grid.cols * grid.cell
  const D = grid.rows * grid.cell
  makeWall(W + 0.2, 0.2, (W - grid.cell) / 2, -grid.cell / 2)
  makeWall(W + 0.2, 0.2, (W - grid.cell) / 2, (grid.rows - 0.5) * grid.cell)
  makeWall(0.2, D + 0.2, -grid.cell / 2, (D - grid.cell) / 2)
  makeWall(0.2, D + 0.2, (grid.cols - 0.5) * grid.cell, (D - grid.cell) / 2)
  scene.add(walls)

  // snake body group
  const snakeGroup = new THREE.Group()
  scene.add(snakeGroup)

  // snake head
  const headGeo = new THREE.BoxGeometry(0.9 * grid.cell, 0.9 * grid.cell, 0.9 * grid.cell)
  const headMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#22c55e'), metalness: 0.0, roughness: 1.0 })
  const headMesh = new THREE.Mesh(headGeo, headMat)
  scene.add(headMesh)

  // food
  const foodGeo = new THREE.SphereGeometry(0.4 * grid.cell, 24, 16)
  const foodMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.2, roughness: 0.4 })
  const foodMesh = new THREE.Mesh(foodGeo, foodMat)
  scene.add(foodMesh)

  const cleanup = () => {
    scene.traverse((obj: THREE.Object3D) => {
      const mesh = obj as THREE.Mesh
      if ((mesh as any).isMesh) {
        mesh.geometry?.dispose?.()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m: THREE.Material) => m.dispose())
        } else {
          (mesh.material as THREE.Material)?.dispose?.()
        }
      }
    })
    scene.clear()
  }

  return { scene, snakeGroup, headMesh, foodMesh, cleanup }
}
