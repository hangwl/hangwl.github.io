import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, lazy, Suspense } from 'react'
import { PageLoader } from '@/components/page-loader'

const SpinningCube = lazy(() => import('@/components/three/SpinningCube'))

export const Route = createFileRoute('/lab/spinning-cube')({
  component: SpinningCubeRoute,
})

function SpinningCubeRoute() {
  useEffect(() => {
    document.title = 'three | spinning cube'
  }, [])

  const [rotationSpeed, setRotationSpeed] = useState(0.02)
  const [color, setColor] = useState('#22c55e')
  const [wireframe, setWireframe] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)
  const [enableOrbitControls, setEnableOrbitControls] = useState(true)

  return (
    <div className="max-w-5xl w-full mx-auto px-4 py-24 space-y-6">
      <header className="text-center space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Spinning Cube</h1>
        <p className="text-muted-foreground">Interactive cube demo with controls.</p>
      </header>

      <section className="py-4 space-y-4">
        <div className="grid gap-6 md:grid-cols-[1fr_320px]">
          <Suspense fallback={<PageLoader message="Loading 3D scene..." fullScreen={false} />}>
            <SpinningCube
              height="60vh"
              rotationSpeed={rotationSpeed}
              color={color}
              wireframe={wireframe}
              autoRotate={autoRotate}
              enableOrbitControls={enableOrbitControls}
            />
          </Suspense>

          <div className="rounded-lg border bg-card p-4 h-fit">
            <h3 className="font-medium mb-3">Controls</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <label htmlFor="rotation-speed" className="text-muted-foreground">Rotation speed</label>
                <input
                  id="rotation-speed"
                  type="range"
                  min="0"
                  max="0.1"
                  step="0.001"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="cube-color" className="text-muted-foreground">Color</label>
                <input
                  id="cube-color"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="wireframe" className="text-muted-foreground">Wireframe</label>
                <input
                  id="wireframe"
                  type="checkbox"
                  checked={wireframe}
                  onChange={(e) => setWireframe(e.target.checked)}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="auto-rotate" className="text-muted-foreground">Auto rotate</label>
                <input
                  id="auto-rotate"
                  type="checkbox"
                  checked={autoRotate}
                  onChange={(e) => setAutoRotate(e.target.checked)}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="orbit-controls" className="text-muted-foreground">Orbit controls</label>
                <input
                  id="orbit-controls"
                  type="checkbox"
                  checked={enableOrbitControls}
                  onChange={(e) => setEnableOrbitControls(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpinningCubeRoute
