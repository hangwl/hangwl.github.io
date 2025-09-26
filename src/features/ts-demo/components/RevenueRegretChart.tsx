import { PlotlyLazy } from './PlotlyLazy'

type Props = {
  steps: number[]
  revenue: number[]
  regret: number[]
  expected?: boolean
}

export default function RevenueRegretChart({ steps, revenue, regret, expected = true }: Props) {
  const traces: any[] = [
    {
      x: steps,
      y: revenue,
      type: 'scatter',
      mode: 'lines',
      name: 'Total Revenue',
      line: { color: '#2ecc71' },
      fill: 'tozeroy',
      fillcolor: 'rgba(46, 204, 113, 0.25)',
    },
    {
      x: steps,
      y: regret,
      type: 'scatter',
      mode: 'lines',
      name: expected ? 'Expected Regret' : 'Cumulative Regret',
      line: { color: '#e74c3c' },
      fill: 'tozeroy',
      fillcolor: expected ? 'rgba(231, 76, 60, 0.18)' : 'rgba(231, 76, 60, 0.28)',
    },
  ]

  return (
    <div className="w-full">
      <PlotlyLazy
        data={traces as any}
        layout={{
          title: expected ? 'Total Revenue vs Expected Regret' : 'Total Revenue vs Cumulative Regret',
          xaxis: { title: 'Steps' },
          yaxis: { title: 'Amount ($)' },
          margin: { t: 40, r: 20, b: 40, l: 50 },
          showlegend: true,
          hovermode: 'x unified',
        } as any}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height: 360 }}
      />
    </div>
  )
}
