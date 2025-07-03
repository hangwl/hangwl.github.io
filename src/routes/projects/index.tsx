import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
  beforeLoad: () => {
    throw redirect({
      to: '/',
      hash: 'projects',
      statusCode: 301, // Permanent redirect
    })
  },
})

