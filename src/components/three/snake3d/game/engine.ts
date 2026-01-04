import { GameState, GridConfig, TickResult, Vec } from './types'

export function createInitialState(grid: GridConfig): GameState {
  const mid = { x: Math.floor(grid.cols / 2), y: Math.floor(grid.rows / 2) }
  return {
    snake: [mid, { x: mid.x - 1, y: mid.y }, { x: mid.x - 2, y: mid.y }],
    dir: { x: 1, y: 0 },
    pendingDir: { x: 1, y: 0 },
    food: { x: 10, y: 10 },
    score: 0,
    running: false,
    hasStarted: false,
    gameOver: false,
  }
}

export function turnLeft(dir: Vec): Vec {
  return { x: dir.y, y: -dir.x }
}

export function turnRight(dir: Vec): Vec {
  return { x: -dir.y, y: dir.x }
}

export function placeFood(state: GameState, grid: GridConfig) {
  while (true) {
    const f = { x: Math.floor(Math.random() * grid.cols), y: Math.floor(Math.random() * grid.rows) }
    if (!state.snake.some((s) => s.x === f.x && s.y === f.y)) {
      state.food = f
      return
    }
  }
}

export function tick(state: GameState, grid: GridConfig): TickResult {
  // apply pending -> dir
  state.dir = state.pendingDir
  const head = { ...state.snake[0] }
  head.x += state.dir.x
  head.y += state.dir.y

  if (head.x < 0 || head.y < 0 || head.x >= grid.cols || head.y >= grid.rows) {
    state.gameOver = true
    state.running = false
    return 'hitWall'
  }
  if (state.snake.some((s) => s.x === head.x && s.y === head.y)) {
    state.gameOver = true
    state.running = false
    return 'hitSelf'
  }

  state.snake = [head, ...state.snake]
  if (head.x === state.food.x && head.y === state.food.y) {
    state.score += 1
    placeFood(state, grid)
    return 'ate'
  } else {
    state.snake.pop()
    return 'ok'
  }
}
