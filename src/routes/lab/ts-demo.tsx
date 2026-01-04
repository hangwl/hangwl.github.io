import { createFileRoute } from '@tanstack/react-router'
import { useEffect, lazy, Suspense } from 'react'
import { PageLoader } from '@/components/page-loader'

const ThompsonSamplingDemo = lazy(() => import('@/features/ts-demo/App'))

export const Route = createFileRoute('/lab/ts-demo')({
  component: TSDemoRoute,
})

function TSDemoRoute() {
  useEffect(() => {
    document.title = 'lab | Thompson Sampling Demo'
  }, [])

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto my-8 space-y-6">
      <Suspense fallback={<PageLoader message="Loading Thompson Sampling Demo..." fullScreen={false} />}>
        <ThompsonSamplingDemo />
      </Suspense>
    </div>
  )
}

export default TSDemoRoute
