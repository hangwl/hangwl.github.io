// Simple second-price auction: winner pays highest competing bid (or own if alone)
export function clearingPriceSecondPrice(ads: any[], winnerIdx: number): number {
  const competitorBids = ads
    .filter((_: any, i: number) => i !== winnerIdx)
    .map((a: any) => a.bid as number)
  if (competitorBids.length > 0) {
    return Math.max(...competitorBids)
  }
  return ads[winnerIdx].bid as number
}

// Expected platform revenue if ad i wins: trueCtr_i * clearingPrice_i
export function expectedRevenueIfWins(i: number, ads: any[]): number {
  const competitorBids = ads
    .filter((_: any, idx: number) => idx !== i)
    .map((a: any) => a.bid as number)
  const price = competitorBids.length > 0
    ? Math.max(...competitorBids)
    : (ads[i].bid as number)
  return (ads[i].trueCtr as number) * price
}
