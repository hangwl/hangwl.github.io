import { Suspense, lazy } from 'react'

// Lazy-load Plotly and the react wrapper to keep initial bundle small
const LazyPlot = lazy(async () => {
  const [{ default: createPlotlyComponent }, Plotly] = await Promise.all([
    import('react-plotly.js/factory'),
    import('plotly.js-dist-min'),
  ])
  const Plot = createPlotlyComponent((Plotly as any).default ?? (Plotly as any))
  return { default: Plot }
})

export function PlotlyLazy(props: any) {
  return (
    <Suspense
      fallback={<div className="h-72 w-full rounded-lg bg-muted animate-pulse" />}
    >
      <LazyPlot {...props} />
    </Suspense>
  )
}
