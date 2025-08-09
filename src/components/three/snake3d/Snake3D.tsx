import { useEffect, useMemo, useRef, useState } from 'react'
import { Overlay } from './ui/Overlay'
import { Snake3DCanvas } from './Snake3DCanvas'
import { useSnake3D } from './useSnake3D'
import { GridConfig } from './game/types'

export default function Snake3D() {
  const grid: GridConfig = useMemo(() => ({ cols: 20, rows: 20, cell: 1.2, camHeight: 0.5 }), [])
  const {
    mountRef,
    miniCanvasRef,
    state,
    viewMode,
    canvasH,
    onCanvasClick,
    onTurnLeft,
    onTurnRight,
    onCycleView,
  } = useSnake3D(grid)

  // Touch zones should only be active during gameplay
  const zonesActive = state.running && state.hasStarted && !state.gameOver

  // Fullscreen management
  // Fullscreen target should include both canvas and overlay
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const onToggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        const el = wrapperRef.current || containerRef.current || document.documentElement
        if (el && (el as any).requestFullscreen) {
          await (el as any).requestFullscreen()
        }
      } else if (document.exitFullscreen) {
        await document.exitFullscreen()
      }
    } catch (e) {
      // Silently ignore; optional: show a toast in future
      console.warn('Fullscreen toggle failed', e)
    }
  }

  return (
    <div className="space-y-3">
      <div
        ref={wrapperRef}
        className="relative"
        style={isFullscreen ? { width: '100vw', height: '100dvh' } : undefined}
      >
        <Snake3DCanvas
          height={canvasH}
          show2D={viewMode === 'top'}
          onCanvasClick={onCanvasClick}
          ref={mountRef}
          miniCanvasRef={miniCanvasRef}
          containerRef={containerRef}
        />
        <Overlay
          score={state.score}
          hasStarted={state.hasStarted}
          running={state.running}
          gameOver={state.gameOver}
          viewMode={viewMode}
          onCycleView={onCycleView}
          isFullscreen={isFullscreen}
          onToggleFullscreen={onToggleFullscreen}
        />
        {/* touch zones */}
        <div className={`absolute inset-0 pointer-events-none ${zonesActive ? 'z-50' : 'z-0'}`}>
          <div
            className={`absolute left-0 top-0 bottom-0 bg-transparent cursor-pointer ${zonesActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
            style={{ width: '25%' }}
            onClick={onTurnLeft}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 bg-transparent cursor-pointer ${zonesActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
            style={{ width: '25%' }}
            onClick={onTurnRight}
          />
        </div>
      </div>
    </div>
  )
}
