import { createFileRoute } from '@tanstack/react-router'
import { useEffect, lazy, Suspense } from 'react'
import { PageLoader } from '@/components/page-loader'

const ResearchAgentApp = lazy(() => import('@/features/research-agent/ResearchAgentApp'))

export const Route = createFileRoute('/lab/research-agent')({
  component: ResearchAgentRoute,
  loader: () => <PageLoader />,
})

function ResearchAgentRoute() {
  useEffect(() => {
    document.title = 'lab | Research Agent'
  }, [])

  return (
    <div className="max-w-7xl w-full mx-auto px-4 py-24 space-y-6">
      <header className="text-center space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Research Agent</h1>
        <p className="text-muted-foreground">Ask a question and watch the agent research, reason, and synthesize an answer with citations.</p>
      </header>
      <Suspense fallback={<PageLoader message="Loading Research Agent..." fullScreen={false} />}>
        <ResearchAgentApp />
      </Suspense>
    </div>
  )
}

export default ResearchAgentRoute
