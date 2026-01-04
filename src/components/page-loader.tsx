import { LoadingSpinner } from './loading-spinner'
import { cn } from '@/lib/utils'

interface PageLoaderProps {
  message?: string
  fullScreen?: boolean
  className?: string
}

export function PageLoader({ message = 'Loading...', fullScreen = true, className }: PageLoaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        fullScreen ? 'min-h-screen' : 'min-h-[400px]',
        className
      )}
    >
      <LoadingSpinner size="lg" />
      <p className="text-muted-foreground animate-pulse">{message}</p>
    </div>
  )
}

export function RouteLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground animate-pulse">Loading page...</p>
      </div>
    </div>
  )
}
