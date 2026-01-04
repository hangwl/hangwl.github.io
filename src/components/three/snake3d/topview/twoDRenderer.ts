import { GameState, GridConfig } from '../game/types'

export function create2DRenderer(canvas: HTMLCanvasElement, grid: GridConfig) {
  const refs = {
    ctx: canvas.getContext('2d') as CanvasRenderingContext2D | null,
    pad: 12,
    cell: 6,
    offX: 0,
    offY: 0,
    w: 0,
    h: 0,
  }

  function resize(w: number, h: number) {
    canvas.width = w
    canvas.height = h
    refs.w = w
    refs.h = h
    const pad = Math.max(20, Math.min(44, Math.round(Math.min(w, h) * 0.065)))
    refs.pad = pad
    const availW = Math.max(0, w - 2 * pad)
    const availH = Math.max(0, h - 2 * pad)
    const mCell = Math.max(2, Math.floor(Math.min(availW / grid.cols, availH / grid.rows)))
    const boardW = grid.cols * mCell
    const boardH = grid.rows * mCell
    refs.cell = mCell
    refs.offX = pad + Math.floor((availW - boardW) / 2)
    refs.offY = pad + Math.floor((availH - boardH) / 2)
  }

  function render(state: GameState) {
    const mctx = refs.ctx
    if (!mctx) return
    const { w, h, cell, offX, offY } = refs
    mctx.clearRect(0, 0, w, h)
    mctx.fillStyle = '#0b0b0b'
    mctx.fillRect(0, 0, w, h)
    mctx.fillStyle = '#0e0e10'
    mctx.fillRect(offX, offY, grid.cols * cell, grid.rows * cell)
    mctx.strokeStyle = 'rgba(255,255,255,0.08)'
    mctx.lineWidth = 1
    for (let x = 0; x <= grid.cols; x++) {
      const gx = offX + x * cell + 0.5
      mctx.beginPath(); mctx.moveTo(gx, offY); mctx.lineTo(gx, offY + grid.rows * cell); mctx.stroke()
    }
    for (let y = 0; y <= grid.rows; y++) {
      const gy = offY + y * cell + 0.5
      mctx.beginPath(); mctx.moveTo(offX, gy); mctx.lineTo(offX + grid.cols * cell, gy); mctx.stroke()
    }
    // food
    mctx.fillStyle = '#ef4444'
    mctx.fillRect(offX + state.food.x * cell, offY + state.food.y * cell, cell, cell)
    // snake body
    mctx.fillStyle = '#22c55e'
    state.snake.forEach((seg, i) => {
      if (i === 0) return
      mctx.fillRect(offX + seg.x * cell + 1, offY + seg.y * cell + 1, cell - 2, cell - 2)
    })
    // head
    const head = state.snake[0]
    if (head) {
      mctx.fillStyle = '#22c55e'
      mctx.fillRect(offX + head.x * cell, offY + head.y * cell, cell, cell)
    }
  }

  function dispose() {}

  return { resize, render, dispose }
}
