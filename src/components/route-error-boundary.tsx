import { useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

interface RouteErrorBoundaryProps {
  error: Error
  reset?: () => void
}

export function RouteErrorBoundary({ error, reset }: RouteErrorBoundaryProps) {
  const router = useRouter()

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Page Error</h1>
          <p className="text-xl text-muted-foreground">
            We encountered an error loading this page
          </p>
        </div>
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm font-mono text-destructive">{error.message}</p>
        </div>
        <div className="flex gap-2 justify-center">
          {reset && (
            <Button onClick={reset} variant="default">
              Try Again
            </Button>
          )}
          <Button onClick={() => router.navigate({ to: '/' })} variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}
