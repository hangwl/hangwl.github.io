type Props = { running: boolean; hasStarted: boolean; gameOver: boolean }
export function Instructions({ running, hasStarted, gameOver }: Props) {
  return (
    <div className="text-xs text-muted-foreground">
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        <span>[← / A] turn left</span>
        <span>[→ / D] turn right</span>
        {!gameOver && (
          <span>
            {!hasStarted ? <>[Space] start</> : <>[Space] {running ? 'pause' : 'resume'}</>}
          </span>
        )}
        <span>[R] to restart</span>
        <span>[V] to toggle view</span>
      </div>
    </div>
  )
}
