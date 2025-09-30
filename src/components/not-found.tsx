import { Link, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from '@/components/theme-provider'
import { Home, ArrowLeft } from 'lucide-react'

interface NotFoundProps {
  title?: string
  message?: string
}

export function NotFound({
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or has been moved.",
}: NotFoundProps) {
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <MagicCard
          gradientColor={resolvedTheme === 'dark' ? '#262626' : '#D9D9D955'}
          className="p-8 md:p-12"
        >
          <div className="text-center space-y-6">
            {/* 404 Number */}
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 select-none">
              404
            </h1>

            {/* Title and Message */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">{message}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button
                onClick={() => router.history.back()}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
              <Button asChild className="gap-2">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </MagicCard>
      </div>
    </div>
  )
}

export function NoteNotFound() {
  return (
    <NotFound
      title="Note Not Found"
      message="This note doesn't exist or may have been removed."
    />
  )
}

export function ProjectNotFound() {
  return (
    <NotFound
      title="Project Not Found"
      message="This project doesn't exist or may have been archived."
    />
  )
}
