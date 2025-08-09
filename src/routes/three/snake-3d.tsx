import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Snake3D } from '../../components/three/snake3d'

export const Route = createFileRoute('/three/snake-3d')({
  component: Snake3DRoute,
})

// First-person 3D Snake using a grid and Three.js
function Snake3DRoute() {
  useEffect(() => {
    document.title = 'three | snake 3d'
    // Lock scrolling for immersive full-screen experience
    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow
    const prevOverscroll = body.style.overscrollBehavior
    const prevHtmlBg = html.style.backgroundColor
    const prevBodyBg = body.style.backgroundColor
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.overscrollBehavior = 'none'
    // Force a black page background to avoid themed edges on mobile safe areas
    html.style.backgroundColor = 'black'
    body.style.backgroundColor = 'black'

    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
      body.style.overscrollBehavior = prevOverscroll
      html.style.backgroundColor = prevHtmlBg
      body.style.backgroundColor = prevBodyBg
    }
  }, [])

  return (
    <div
      className="fixed inset-0 w-screen bg-black flex items-center justify-center"
      style={{ height: '100dvh' }}
    >
      <div className="w-screen">
        <Snake3D />
      </div>
    </div>
  )
}

export default Snake3DRoute

