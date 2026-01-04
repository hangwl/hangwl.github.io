
export type Ad = {
  id: number
  trueCtr: number
  bid: number
  cpc: number
  alpha: number
  beta: number
  clicks: number
  impressions: number
  revenue: number
}

type AdGridProps = {
  ads: Ad[]
  winnerIdx?: number | null
}

export default function AdGrid({ ads, winnerIdx }: AdGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {ads.map((ad, idx) => {
        const selected = winnerIdx === idx
        return (
          <div
            key={ad.id}
            className={
              'rounded-lg border p-3 transition-colors ' +
              (selected
                ? 'border-amber-400 bg-amber-50 text-amber-900 dark:bg-amber-100/10 dark:text-amber-200'
                : 'border-border bg-card text-card-foreground')
            }
          >
            <div className="font-semibold mb-1">Ad {ad.id + 1}</div>
            <div className="text-sm opacity-80">True CTR: {ad.trueCtr.toFixed(3)}</div>
            <div className="text-sm opacity-80">Bid: ${ad.bid.toFixed(2)}</div>
            <div className="text-sm">Clicks: {ad.clicks}</div>
            <div className="text-sm">Impressions: {ad.impressions}</div>
            <div className="text-sm">Revenue: ${ad.revenue.toFixed(2)}</div>
          </div>
        )
      })}
    </div>
  )
}
