import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Snake3D } from '../../components/three/snake3d'

export const Route = createFileRoute('/three/snake-3d')({
  component: Snake3DRoute,
})

// First-person 3D Snake using a grid and Three.js
function Snake3DRoute() {
  useEffect(() => {
    document.title = 'three | snake 3d'
  }, [])

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto my-8 space-y-4">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Snake 3D</h1>
      </header>
      <Snake3D />
    </div>
  )
}

export default Snake3DRoute

