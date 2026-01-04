type Props = {
  score: number
  hasStarted: boolean
  running: boolean
  gameOver: boolean
  viewMode: 'first' | 'chase' | 'top'
  onCycleView: () => void
  isFullscreen: boolean
  onToggleFullscreen: () => void
}

export function Overlay({ score, hasStarted, running, gameOver, viewMode, onCycleView, isFullscreen, onToggleFullscreen }: Props) {
  return (
    <>
      <div className="absolute top-3 left-3 z-50 text-sm text-white pointer-events-none">Score: {score}</div>
      <div className="absolute top-3 right-3 z-[60] flex items-center gap-2">
        <button
          className="pointer-events-auto rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm w-9 h-9 flex items-center justify-center hover:bg-white/20 active:scale-95 cursor-pointer"
          onClick={onCycleView}
          title="Toggle camera view (Chase/First/2D)"
          aria-label="Toggle view"
        >
          {viewMode === 'top' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
              <line x1="9" y1="3" x2="9" y2="18" />
              <line x1="15" y1="6" x2="15" y2="21" />
            </svg>
          )}
          {viewMode === 'first' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="3" />
              <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
            </svg>
          )}
          {viewMode === 'chase' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
        <button
          className="pointer-events-auto rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm w-9 h-9 flex items-center justify-center hover:bg-white/20 active:scale-95 cursor-pointer"
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? (
            // Minimize icon
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 14 10 20" />
              <polyline points="20 10 14 10 14 4" />
              <line x1="14" y1="10" x2="21" y2="3" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          ) : (
            // Maximize icon
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6" />
              <path d="M21 3l-7 7" />
              <path d="M9 21H3v-6" />
              <path d="M3 21l7-7" />
            </svg>
          )}
        </button>
      </div>

      {!hasStarted && !gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <p className="text-white/80 text-3xl sm:text-4xl font-bold tracking-widest">START</p>
        </div>
      )}
      {!running && hasStarted && !gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <span className="text-white/80 text-3xl sm:text-4xl font-bold tracking-widest">PAUSED</span>
        </div>
      )}
      {gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <span className="text-white/80 text-3xl sm:text-4xl font-bold tracking-widest">GAME OVER</span>
        </div>
      )}

      {/* Bottom-center contextual instructions overlay (inside canvas). Hidden while running. */}
      {(!running || !hasStarted || gameOver) && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="mx-auto rounded-md bg-black/40 text-white/90 backdrop-blur px-3 py-2 w-fit max-w-[92vw] min-w-[300px] sm:min-w-[360px]">
            <div className="text-[11px] sm:text-xs flex flex-col items-center gap-y-1">
              {/* First row: left/right controls */}
              <div className="flex justify-center gap-x-3 whitespace-nowrap">
                <span>[← / A] turn left</span>
                <span>[→ / D] turn right</span>
              </div>

              {/* Second row: space (contextual), restart, toggle view */}
              <div className="flex flex-wrap justify-center gap-x-3">
                {!gameOver && (
                  <span>
                    {!hasStarted ? (
                      <>[Space] start</>
                    ) : (
                      <>[Space] {running ? 'pause' : 'resume'}</>
                    )}
                  </span>
                )}
                <span>[R] restart</span>
                <span>[V] toggle view</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
