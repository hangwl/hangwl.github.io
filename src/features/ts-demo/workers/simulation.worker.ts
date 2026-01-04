/* eslint-disable no-restricted-globals */
import { clearingPriceSecondPrice, expectedRevenueIfWins } from '../lib/auction'
import seedrandom from 'seedrandom'

// Worker state
let ads: any[] = []
let intervalId: number | null = null
let speedMs = 500 // default speed
let continuous = false
let stepsPerTick = 1
let rng: (() => number) | null = null
let dynamicEnv = false
let decay = 0

let totalIterations = 0
let totalRevenue = 0
let totalPerfectRevenue = 0
let totalPerfectExpected = 0
let totalChosenExpected = 0

// Mean-reversion + seasonality parameters (defaults)
const MR = {
  ctr: { muBase: 0.05, amp: 0.01, period: 2000, phi: 0.98, sigma: 0.002 },
  bid: { muBase: 1.0, amp: 0.1, period: 2000, phi: 0.99, sigma: 0.02 },
}

// Utilities
function urand() {
  return rng ? rng() : Math.random()
}

function randUniform(min: number, max: number) {
  return urand() * (max - min) + min
}

function makeAds(n: number) {
  const arr: any[] = []
  for (let i = 0; i < n; i++) {
    arr.push({
      id: i,
      trueCtr: randUniform(0.01, 0.1),
      bid: randUniform(0.1, 2.0),
      alpha: 1,
      beta: 1,
      clicks: 0,
      impressions: 0,
      revenue: 0,
      cpc: 0, // set per-impression via auction
    })
  }
  return arr
}

// Beta sampling via two Gamma draws (Cheng’s algorithm)
function sampleBeta(alpha: number, beta: number) {
  function gamma(k: number): number {
    if (k < 1) {
      const u = urand()
      return gamma(1 + k) * Math.pow(u, 1 / k)
    }
    const d = k - 1 / 3
    const c = 1 / Math.sqrt(9 * d)
    while (true) {
      let x: number, v: number
      do {
        const u1 = urand()
        const u2 = urand()
        x = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
        v = 1 + c * x
      } while (v <= 0)
      const u = urand()
      if (u < 1 - 0.0331 * x * x * x * x) return d * v
      if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v
    }
  }
  const x = gamma(alpha)
  const y = gamma(beta)
  return x / (x + y)
}

function thompsonSampling(currentAds: any[]) {
  let bestIdx = 0
  let bestSample = -Infinity
  for (let i = 0; i < currentAds.length; i++) {
    const s = sampleBeta(currentAds[i].alpha, currentAds[i].beta)
    if (s > bestSample) {
      bestSample = s
      bestIdx = i
    }
  }
  return bestIdx
}

function stepOnce() {
  if (!ads || ads.length === 0) return null

  const winnerIdx = thompsonSampling(ads)
  const ad = ads[winnerIdx]

  // Set CPC via auction before simulating click
  const price = clearingPriceSecondPrice(ads, winnerIdx)
  ad.cpc = price

  // Bernoulli click
  const clicked = urand() < ad.trueCtr

  // Update revenue/impressions/clicks and priors
  ad.impressions += 1
  // Apply exponential decay to priors for all ads to emphasize recent data
  if (decay > 0) {
    const keep = 1 - decay
    for (let i = 0; i < ads.length; i++) {
      ads[i].alpha = Math.max(0.001, ads[i].alpha * keep)
      ads[i].beta = Math.max(0.001, ads[i].beta * keep)
    }
  }
  if (clicked) {
    ad.clicks += 1
    ad.revenue += ad.cpc
    ad.alpha += 1
  } else {
    ad.beta += 1
  }

  // Update totals
  totalIterations += 1
  totalRevenue = ads.reduce((acc, a) => acc + a.revenue, 0)

  // Dynamic environment: mean-reversion toward seasonal target + small noise
  if (dynamicEnv) {
    const t = totalIterations
    const season = Math.sin((2 * Math.PI * t) / MR.ctr.period)
    const muCtr = MR.ctr.muBase + MR.ctr.amp * season
    const muBid = MR.bid.muBase + MR.bid.amp * season
    for (let i = 0; i < ads.length; i++) {
      const a = ads[i]
      const epsCtr = (urand() - 0.5) * 2 // uniform in [-1, 1]
      const epsBid = (urand() - 0.5) * 2
      // Mean-reverting update
      const nextCtr = muCtr + MR.ctr.phi * (a.trueCtr - muCtr) + MR.ctr.sigma * epsCtr
      const nextBid = muBid + MR.bid.phi * (a.bid - muBid) + MR.bid.sigma * epsBid
      // Clamp within bounds
      a.trueCtr = Math.min(0.5, Math.max(0.001, nextCtr))
      a.bid = Math.min(5.0, Math.max(0.05, nextBid))
    }
  }

  // EXPLORE vs EXPLOIT based on oracle expected revenue with second-price CPC
  let bestER = -1
  let bestERIdx = 0
  for (let i = 0; i < ads.length; i++) {
    const er = expectedRevenueIfWins(i, ads)
    if (er > bestER) {
      bestER = er
      bestERIdx = i
    }
  }
  const status = winnerIdx === bestERIdx ? 'EXPLOIT' : 'EXPLORE'
  // Accumulate perfect (oracle) revenue for regret tracking
  totalPerfectRevenue += Math.max(0, bestER)
  const chosenER = Math.max(0, expectedRevenueIfWins(winnerIdx, ads))
  totalPerfectExpected += Math.max(0, bestER)
  totalChosenExpected += chosenER

  return {
    winnerIdx,
    clicked,
    status,
    cpcPrice: price,
    totals: {
      totalIterations,
      totalRevenue,
      perfectTotalRevenue: totalPerfectRevenue,
      regret: Math.max(0, totalPerfectRevenue - totalRevenue),
      perfectTotalExpected: totalPerfectExpected,
      chosenTotalExpected: totalChosenExpected,
      expectedRegret: Math.max(0, totalPerfectExpected - totalChosenExpected),
    },
    ads: ads.map((a) => ({
      id: a.id,
      trueCtr: a.trueCtr,
      bid: a.bid,
      cpc: a.cpc,
      alpha: a.alpha,
      beta: a.beta,
      clicks: a.clicks,
      impressions: a.impressions,
      revenue: a.revenue,
    })),
  }
}

function startLoop() {
  if (intervalId) clearInterval(intervalId as unknown as number)
  intervalId = setInterval(() => {
    let tick: any = null
    for (let i = 0; i < Math.max(1, stepsPerTick); i++) {
      const t = stepOnce()
      if (t) tick = t
    }
    if (tick) {
      ;(self as any).postMessage({ type: 'tick', payload: tick })
    }
    if (!continuous) {
      pauseLoop()
    }
  }, speedMs) as unknown as number
}

function pauseLoop() {
  if (intervalId) {
    clearInterval(intervalId as unknown as number)
    intervalId = null
  }
}

self.onmessage = (event: MessageEvent) => {
  const { type, payload } = (event.data || {}) as { type: string; payload?: any }

  switch (type) {
    case 'init': {
      const n = payload?.numAds ?? 5
      const seed = payload?.seed as string | undefined
      rng = seed ? seedrandom(seed) : null
      dynamicEnv = Boolean(payload?.dynamicEnv)
      ads = makeAds(n)
      totalIterations = 0
      totalRevenue = 0
      totalPerfectRevenue = 0
      totalPerfectExpected = 0
      totalChosenExpected = 0
      ;(self as any).postMessage({
        type: 'ready',
        payload: {
          numAds: ads.length,
          ads: ads.map((a) => ({
            id: a.id,
            trueCtr: a.trueCtr,
            bid: a.bid,
            cpc: a.cpc,
            alpha: a.alpha,
            beta: a.beta,
            clicks: a.clicks,
            impressions: a.impressions,
            revenue: a.revenue,
          })),
          totals: { totalIterations, totalRevenue, perfectTotalRevenue: 0, regret: 0 },
        },
      })
      break
    }
    case 'start': {
      continuous = Boolean(payload?.continuous)
      stepsPerTick = Math.max(1, Number(payload?.stepsPerTick ?? 1))
      speedMs = Math.max(10, Math.floor((payload?.speedSec ?? 0.5) * 1000))
      decay = Math.min(1, Math.max(0, Number(payload?.decay ?? 0)))
      startLoop()
      break
    }
    case 'pause': {
      pauseLoop()
      break
    }
    case 'reset': {
      pauseLoop()
      ads = []
      totalIterations = 0
      totalRevenue = 0
      totalPerfectRevenue = 0
      totalPerfectExpected = 0
      totalChosenExpected = 0
      ;(self as any).postMessage({ type: 'reset_done' })
      break
    }
    case 'ping': {
      ;(self as any).postMessage({ type: 'pong', payload: { t: Date.now() } })
      break
    }
    default: {
      ;(self as any).postMessage({ type: 'unknown', payload: { received: { type, payload } } })
    }
  }
}
