type Props = {
  score: number
  hasStarted: boolean
  running: boolean
  gameOver: boolean
  viewMode: 'first' | 'chase' | 'top'
  onCycleView: () => void
}

export function Overlay({ score, hasStarted, running, gameOver, viewMode, onCycleView }: Props) {
  return (
    <>
      <div className="absolute top-3 left-3 z-50 text-sm text-white pointer-events-none">Score: {score}</div>
      <div className="absolute top-3 right-3 z-[60]">
        <button
          className="pointer-events-auto rounded-full border bg-black/60 text-white backdrop-blur-sm w-9 h-9 flex items-center justify-center hover:bg-black/70 active:scale-95 cursor-pointer"
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
    </>
  )
}
