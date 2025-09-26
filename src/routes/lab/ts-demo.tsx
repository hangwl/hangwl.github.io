import { lazy, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

const TSDemoApp = lazy(() => import('@/features/ts-demo/App'))

export const Route = createFileRoute('/lab/ts-demo')({
  component: TSDemoRoute,
})

function TSDemoRoute() {
  useEffect(() => {
    document.title = 'lab | Thompson Sampling Demo'
  }, [])

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto my-8 space-y-6">
      <TSDemoApp />
    </div>
  )
}

export default TSDemoRoute
