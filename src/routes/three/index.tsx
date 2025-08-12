import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/three/')({
  component: ThreeIndex,
})

function ThreeIndex() {
  useEffect(() => {
    document.title = "three | experiments"
  }, [])

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto my-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Three.js Experiments</h1>
        <p className="text-muted-foreground">A playground of small visualizations and shaders.</p>
      </header>

      {/* Demos list */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Demos</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li>
            <Link
              to="/three/spinning-cube"
              className="block rounded-lg border bg-card p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <div className="font-medium">Spinning Cube</div>
              <div className="text-sm text-muted-foreground">Interactive cube with controls</div>
            </Link>
          </li>
          <li>
            <Link
              to="/three/snake-3d"
              className="block rounded-lg border bg-card p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <div className="font-medium">Snake 3D</div>
              <div className="text-sm text-muted-foreground">Mobile friendly 3D Snake game with multiple view modes</div>
            </Link>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default ThreeIndex
