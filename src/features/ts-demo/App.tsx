import { useEffect, useRef, useState } from 'react'
import PriorsChart from './components/PriorsChart'
import { ControlsInit, ControlsSim } from './components/Controls'
import AdGrid from './components/AdGrid'
import Report from './components/Report'
import RevenueRegretChart from './components/RevenueRegretChart'

const createSimulationWorker = () =>
  new Worker(new URL('./workers/simulation.worker.ts', import.meta.url), {
    type: 'module',
  })

export default function App() {
  const workerRef = useRef<Worker | null>(null)
  const [lastTick, setLastTick] = useState<any>(null)
  const [ads, setAds] = useState<any[]>([])
  const [totals, setTotals] = useState({ totalIterations: 0, totalRevenue: 0 } as any)
  const [numAds, setNumAds] = useState(3)
  const [speedSec, setSpeedSec] = useState(0.05)
  const [continuous, setContinuous] = useState(true)
  const [seed, setSeed] = useState('42')
  const [stepsPerTick, setStepsPerTick] = useState(1)
  const [initialized, setInitialized] = useState(false)
  const [running, setRunning] = useState(false)
  const [dynamicEnv, setDynamicEnv] = useState(false)
  const [decay, setDecay] = useState(0.01)
  const [chartExpected, setChartExpected] = useState(true)
  const [seriesSteps, setSeriesSteps] = useState<number[]>([])
  const [seriesRevenue, setSeriesRevenue] = useState<number[]>([])
  const [seriesRegret, setSeriesRegret] = useState<number[]>([])
  const [seriesExpectedRegret, setSeriesExpectedRegret] = useState<number[]>([])
  

  // Create worker once on mount
  useEffect(() => {
    const worker = createSimulationWorker()
    workerRef.current = worker

    worker.onmessage = (event: MessageEvent) => {
      const { type, payload } = (event.data || {}) as any
      if (type === 'ready') {
        setInitialized(true)
        if (payload?.ads) setAds(payload.ads)
        if (payload?.totals) {
          setTotals(payload.totals)
          const step = payload.totals.totalIterations || 0
          const rev = payload.totals.totalRevenue || 0
          const reg = payload.totals.regret || 0
          const ereg = payload.totals.expectedRegret || 0
          setSeriesSteps([step])
          setSeriesRevenue([rev])
          setSeriesRegret([reg])
          setSeriesExpectedRegret([ereg])
        }
      } else if (type === 'tick') {
        setLastTick(payload)
        setAds(payload.ads)
        setTotals(payload.totals)
        setSeriesSteps((arr) => [...arr, payload.totals.totalIterations])
        setSeriesRevenue((arr) => [...arr, payload.totals.totalRevenue])
        setSeriesRegret((arr) => [...arr, payload.totals.regret])
        setSeriesExpectedRegret((arr) => [...arr, payload.totals.expectedRegret || 0])
      } else if (type === 'reset_done') {
        setAds([])
        setTotals({ totalIterations: 0, totalRevenue: 0 } as any)
        setInitialized(false)
        setSeriesSteps([])
        setSeriesRevenue([])
        setSeriesRegret([])
        setSeriesExpectedRegret([])
      }
    }

    return () => {
      worker.terminate()
      workerRef.current = null
    }
  }, [])

  // Initialize (or re-initialize) ads whenever numAds, seed, or dynamicEnv changes and worker exists
  useEffect(() => {
    if (workerRef.current) {
      workerRef.current.postMessage({ type: 'init', payload: { numAds, seed: seed || undefined, dynamicEnv } })
    }
  }, [numAds, seed, dynamicEnv])

  const reinit = () => {
    workerRef.current?.postMessage({ type: 'reset' })
    setInitialized(false)
    setRunning(false)
    setSeriesSteps([])
    setSeriesRevenue([])
    setSeriesRegret([])
    setTimeout(() => {
      workerRef.current?.postMessage({ type: 'init', payload: { numAds, seed: seed || undefined, dynamicEnv } })
    }, 10)
  }

  const start = () => {
    workerRef.current?.postMessage({
      type: 'start',
      payload: { continuous, speedSec, stepsPerTick, decay },
    })
    setRunning(true)
  }

  const pause = () => {
    workerRef.current?.postMessage({ type: 'pause' })
    setRunning(false)
  }

  return (
    <div className="max-w-5xl w-full mx-auto px-4 py-6 space-y-6">
      <header className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Thompson Sampling React Demo</h1>
        <p className="text-sm text-muted-foreground">Dynamic multi-armed bandit simulation with Plotly charts</p>
      </header>

      {/* Case Study */}
      <section aria-labelledby="case-study-section" className="p-4 border rounded-lg">
        <h2 id="case-study-section" className="font-semibold mb-2">Case Study</h2>
        <div className="leading-relaxed text-left text-sm space-y-3">
          <p>
            Consider an advertising platform running multiple creatives for a product launch. Early on, exploration reveals which
            creatives appeal to different audiences. As the campaign progresses, user interest shifts (weekend spikes,
            midweek dips), and advertisers adjust bids to pace budgets.
          </p>
          <p>
            Thompson Sampling adapts by continuously balancing exploration with exploitation in dynamic environments by sampling from
            each ad’s Beta prior over CTR and choosing the ad with the largest sample. Each impression produces either a click or no
            click, which updates the ad’s Beta parameters.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Goal:</strong> Maximize platform revenue (CPC × clicks) while learning CTRs.</li>
            <li><strong>Dynamics:</strong> True CTR and bids drift seasonally and mean-revert to campaign baselines.</li>
            <li><strong>Policy:</strong> TS selects ads by sampling CTRs from Beta posteriors; second-price auction sets CPC.</li>
            <li><strong>Evaluation:</strong> We track realized revenue and both realized and expected regret against an oracle with perfect knowledge of CTRs.</li>
          </ul>
        </div>
      </section>

      {/* Concepts */}
      <section aria-labelledby="concepts-section" className="p-4 border rounded-lg">
        <h2 id="concepts-section" className="font-semibold mb-2">Concepts</h2>
        <ul className="list-disc pl-6 text-sm space-y-1 text-left">
          <li><strong>CTR:</strong> True (hidden) click probability for an ad. The demo simulates it and can make it dynamic.</li>
          <li><strong>Beta Prior:</strong> Beta(α, β). We update α on click and β on no click; optional prior decay emphasizes recent data.</li>
          <li><strong>Second-Price Auction (CPC):</strong> The winner pays the highest competing bid.</li>
          <li><strong>Revenue:</strong> Added only on clicks: CPC when a click happens.</li>
          <li><strong>Regret:</strong> Difference between oracle best expected revenue and the chosen policy’s revenue. We track both realized and expected regret.</li>
          <li><strong>Dynamic Environment:</strong> Mean-reverting seasonal drift in CTR and bids to simulate changing markets.</li>
        </ul>
      </section>

      {/* Demo Sections */}
      <section aria-labelledby="ads-section" className="border rounded-lg p-4">
        <h2 id="ads-section" className="font-semibold mb-2">Advertisements</h2>
        <ControlsInit
          numAds={numAds}
          setNumAds={setNumAds}
          seed={seed}
          setSeed={setSeed}
          dynamicEnv={dynamicEnv}
          setDynamicEnv={setDynamicEnv}
          onInit={() => setInitialized(true)}
        />
        <div className="mt-2 text-sm">
          <span className="font-semibold mr-2">Status:</span>
          {lastTick?.status ? (
            <span
              className={
                'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ' +
                (lastTick.status === 'EXPLOIT'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-sky-500 text-white')
              }
            >
              {lastTick.status}
            </span>
          ) : (
            <span className="opacity-60">—</span>
          )}
          {typeof lastTick?.cpcPrice === 'number' && (
            <span className="ml-3">
              <strong>CPC:</strong> ${lastTick.cpcPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mt-4">
          <AdGrid ads={ads as any} winnerIdx={lastTick?.winnerIdx ?? null} />
        </div>
      </section>

      <section aria-labelledby="sim-section" className="border rounded-lg p-4">
        <h2 id="sim-section" className="font-semibold mb-2">Simulation</h2>
        <ControlsSim
          initialized={initialized}
          speedSec={speedSec}
          setSpeedSec={setSpeedSec}
          continuous={continuous}
          setContinuous={setContinuous}
          stepsPerTick={stepsPerTick}
          setStepsPerTick={setStepsPerTick}
          decay={decay}
          setDecay={setDecay}
          chartExpected={chartExpected}
          setChartExpected={setChartExpected}
          running={running}
          onStart={start}
          onPause={pause}
          onReset={reinit}
        />

        <div className="my-4">
          <PriorsChart ads={ads as any} />
        </div>
        <div className="my-4">
          <RevenueRegretChart
            steps={seriesSteps}
            revenue={seriesRevenue}
            regret={chartExpected ? seriesExpectedRegret : seriesRegret}
            expected={chartExpected}
          />
        </div>
      </section>

      <section aria-labelledby="report-section" className="border rounded-lg p-4">
        <h2 id="report-section" className="font-semibold mb-2">Report</h2>
        <Report totals={totals as any} ads={ads as any} />
      </section>
    </div>
  )
}
