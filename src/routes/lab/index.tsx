import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from '@/components/theme-provider'

export const Route = createFileRoute('/lab/')({
  component: ThreeIndex,
})

function ThreeIndex() {
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    document.title = "lab | experiments"
  }, [])

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto my-8">
      <header className="space-y-2 my-4">
        <h1 className="text-3xl font-bold tracking-tight">Experiments</h1>
        <p className="text-muted-foreground">A playground of threejs experiments and more.</p>
      </header>

      {/* Demos list */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Demos</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li>
            <MagicCard
              className="rounded-lg"
              gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <Link
                to="/lab/spinning-cube"
                className="block p-4"
              >
                <div className="font-medium">Spinning Cube</div>
                <div className="text-sm text-muted-foreground">Interactive cube with controls</div>
              </Link>
            </MagicCard>
          </li>
          <li>
            <MagicCard
              className="rounded-lg"
              gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <Link
                to="/lab/snake-3d"
                className="block p-4"
              >
                <div className="font-medium">Snake 3D</div>
                <div className="text-sm text-muted-foreground">Mobile friendly 3D Snake game with multiple view modes</div>
              </Link>
            </MagicCard>
          </li>
          <li>
            <MagicCard
              className="rounded-lg"
              gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <Link
                to="/lab/ts-demo"
                className="block p-4"
              >
                <div className="font-medium">Thompson Sampling Demo</div>
                <div className="text-sm text-muted-foreground">Multi-armed bandit simulation with Plotly charts and Web Worker</div>
              </Link>
            </MagicCard>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default ThreeIndex
