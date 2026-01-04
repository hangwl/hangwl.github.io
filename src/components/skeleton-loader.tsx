import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      role="status"
      aria-label="Loading content"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn('rounded-lg border border-border p-6 space-y-4', className)}>
      <div className="flex items-start justify-between">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-5 w-20" />
      </div>
      <SkeletonText lines={3} />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
    </div>
  )
}

export function SkeletonTimeline({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-8">
      {Array.from({ length: items }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonNote() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Skeleton className="h-12 w-3/4" />
      <SkeletonText lines={2} />
      <div className="space-y-4 mt-8">
        <Skeleton className="h-8 w-1/3" />
        <SkeletonText lines={4} />
        <Skeleton className="h-8 w-1/2 mt-6" />
        <SkeletonText lines={5} />
      </div>
    </div>
  )
}

export function SkeletonProject() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="rounded-lg border border-border p-6 space-y-4">
        <Skeleton className="h-48 w-full rounded-lg" />
        <Skeleton className="h-10 w-2/3" />
        <SkeletonText lines={2} />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/4" />
        <SkeletonText lines={6} />
      </div>
    </div>
  )
}
