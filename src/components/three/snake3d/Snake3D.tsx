import { useMemo } from 'react'
import { Instructions } from './ui/Instructions'
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

  return (
    <div className="space-y-3">
      <div className="relative">
        <Snake3DCanvas height={canvasH} show2D={viewMode === 'top'} onCanvasClick={onCanvasClick} ref={mountRef} miniCanvasRef={miniCanvasRef} />
        <Overlay
          score={state.score}
          hasStarted={state.hasStarted}
          running={state.running}
          gameOver={state.gameOver}
          viewMode={viewMode}
          onCycleView={onCycleView}
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
      <Instructions running={state.running} hasStarted={state.hasStarted} gameOver={state.gameOver} />
    </div>
  )
}
