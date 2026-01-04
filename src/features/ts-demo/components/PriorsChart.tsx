import { useMemo } from 'react'
import { PlotlyLazy } from './PlotlyLazy'
import { betaPdf } from '../lib/beta'

type AdLike = {
  id: number
  alpha: number
  beta: number
}

type PriorsChartProps = {
  ads: AdLike[]
}

const COLORS = [
  '#e74c3c', // red
  '#3498db', // blue
  '#2ecc71', // green
  '#e67e22', // orange
  '#9b59b6', // purple
  '#8e44ad', // dark purple
  '#1abc9c', // teal
  '#34495e', // slate
  '#f1c40f', // yellow
  '#7f8c8d', // gray
]

export default function PriorsChart({ ads }: PriorsChartProps) {
  const x = useMemo(() => {
    const arr: number[] = []
    const n = 100
    for (let i = 0; i < n; i++) arr.push(i / (n - 1))
    return arr
  }, [])

  const traces = useMemo(() => {
    return ads.map((ad, idx) => {
      const y = x.map((xi) => betaPdf(xi, ad.alpha, ad.beta))
      return {
        x,
        y,
        mode: 'lines' as const,
        name: `Ad ${ad.id + 1}`,
        line: { color: COLORS[idx % COLORS.length] },
      }
    })
  }, [ads, x])

  return (
    <div className="w-full">
      <PlotlyLazy
        data={traces as any}
        layout={{
          title: 'Beta Prior Distributions',
          xaxis: { title: 'CTR', range: [0, 1] },
          yaxis: { title: 'Density' },
          margin: { t: 40, r: 20, b: 40, l: 50 },
          showlegend: true,
        } as any}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height: 360 }}
      />
    </div>
  )
}
