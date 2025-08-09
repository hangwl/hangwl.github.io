export type Vec = { x: number; y: number }
export type ViewMode = 'first' | 'chase' | 'top'

export type GridConfig = {
  cols: number
  rows: number
  cell: number
  camHeight: number
}

export type GameState = {
  snake: Vec[]
  dir: Vec
  pendingDir: Vec
  food: Vec
  score: number
  running: boolean
  hasStarted: boolean
  gameOver: boolean
}

export type TickResult = 'ok' | 'hitWall' | 'hitSelf' | 'ate'
