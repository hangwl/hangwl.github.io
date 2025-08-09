import { forwardRef, RefObject } from 'react'

type Props = {
  height: number
  show2D: boolean
  onCanvasClick: () => void
  miniCanvasRef?: RefObject<HTMLCanvasElement | null>
}

export const Snake3DCanvas = forwardRef<HTMLDivElement, Props>(function Snake3DCanvas(
  { height, show2D, onCanvasClick, miniCanvasRef },
  ref,
) {
  return (
    <div className="relative rounded-lg overflow-hidden border bg-card w-full" style={{ height }}>
      <div ref={ref} className={`absolute inset-0 z-0 ${show2D ? 'opacity-0 pointer-events-none' : ''}`} />
      {show2D && (
        <canvas ref={miniCanvasRef} className="absolute inset-0 z-0 bg-black" />
      )}
      <button
        type="button"
        className="absolute inset-0 z-40 bg-transparent cursor-pointer"
        onClick={onCanvasClick}
      />
    </div>
  )
})
