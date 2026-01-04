
type Totals = {
  totalIterations: number
  totalRevenue: number
  perfectTotalRevenue?: number
  regret?: number
  expectedRegret?: number
}

type Ad = {
  id: number
  revenue: number
}

type ReportProps = {
  totals: Totals
  ads?: Ad[]
}

export default function Report({ totals, ads = [] }: ReportProps) {
  return (
    <div className="space-y-6">
      {/* Metrics Table */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/60">
            <tr className="border-b">
              <th scope="col" className="px-4 py-2 text-left font-semibold">Metric</th>
              <th scope="col" className="px-4 py-2 text-left font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Iterations</td>
              <td className="px-4 py-2">{totals.totalIterations}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Total Revenue</td>
              <td className="px-4 py-2">${totals.totalRevenue.toFixed(2)}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Perfect Total Revenue</td>
              <td className="px-4 py-2">${Number(totals.perfectTotalRevenue || 0).toFixed(2)}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Realized Regret</td>
              <td className="px-4 py-2">${Number(totals.regret || 0).toFixed(2)}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Expected Regret</td>
              <td className="px-4 py-2">${Number(totals.expectedRegret || 0).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Per-Ad Revenue Breakdown */}
      {ads.length > 0 && (
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="border-b">
                <th scope="col" className="px-4 py-2 text-left font-semibold">Ad</th>
                <th scope="col" className="px-4 py-2 text-left font-semibold">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {ads.map((a) => (
                <tr key={a.id} className="border-b last:border-0">
                  <td className="px-4 py-2">Ad {a.id + 1}</td>
                  <td className="px-4 py-2">${Number(a.revenue || 0).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
