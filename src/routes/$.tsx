import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '@/components/not-found'
import { generateSEO } from '@/lib/seo'

export const Route = createFileRoute('/$')({
  head: () =>
    generateSEO({
      title: '404 - Page Not Found',
      description: 'The page you are looking for could not be found.',
    }),
  component: NotFound,
})
