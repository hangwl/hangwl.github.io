import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export type ControlsInitProps = {
  numAds: number
  setNumAds: (n: number) => void
  seed: string
  setSeed: (s: string) => void
  dynamicEnv: boolean
  setDynamicEnv: (b: boolean) => void
  onInit: () => void
}

export function ControlsInit({ numAds, setNumAds, seed, setSeed, dynamicEnv, setDynamicEnv, onInit }: ControlsInitProps) {
  return (
    <div className="px-2 py-3">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <label className="flex items-center gap-2">
          <span className="text-sm">Ads:</span>
          <Input
            type="number"
            min={1}
            max={12}
            value={numAds}
            onChange={(e) => setNumAds(Number(e.target.value))}
            className="w-20"
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm">Seed:</span>
          <Input
            type="text"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            placeholder="optional"
            className="w-36"
          />
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={dynamicEnv}
            onChange={(e) => setDynamicEnv(e.target.checked)}
            className="size-4"
          />
          <span className="text-sm">Dynamic Environment</span>
        </label>
        <Button onClick={onInit} variant="outline">Reinitialize Ads</Button>
      </div>
    </div>
  )
}

export type ControlsSimProps = {
  initialized: boolean
  speedSec: number
  setSpeedSec: (s: number) => void
  continuous: boolean
  setContinuous: (c: boolean) => void
  stepsPerTick: number
  setStepsPerTick: (n: number) => void
  running: boolean
  decay: number
  setDecay: (n: number) => void
  chartExpected: boolean
  setChartExpected: (b: boolean) => void
  onStart: () => void
  onPause: () => void
  onReset: () => void
}

export function ControlsSim({ initialized, speedSec, setSpeedSec, continuous, setContinuous, stepsPerTick, setStepsPerTick, running, decay, setDecay, chartExpected, setChartExpected, onStart, onPause, onReset }: ControlsSimProps) {
  return (
    <div className="px-2 py-3">
      <div className="flex flex-wrap items-center gap-3 justify-center mb-3">
        <label className="flex items-center gap-2">
          <span className="text-sm">Speed (sec/step):</span>
          <Input
            type="number"
            step={0.1}
            min={0.05}
            value={speedSec}
            onChange={(e) => setSpeedSec(Number(e.target.value))}
            className="w-24"
            disabled={!initialized}
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm">Steps per tick:</span>
          <Input
            type="number"
            min={1}
            value={stepsPerTick}
            onChange={(e) => setStepsPerTick(Math.max(1, Number(e.target.value)))}
            className="w-24"
            disabled={!initialized}
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm">Prior Decay (0-1):</span>
          <Input
            type="number"
            min={0}
            max={1}
            step={0.01}
            value={decay}
            onChange={(e) => setDecay(Math.max(0, Math.min(1, Number(e.target.value))))}
            className="w-24"
            disabled={!initialized}
          />
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={chartExpected}
            onChange={(e) => setChartExpected(e.target.checked)}
            className="size-4"
            disabled={!initialized}
          />
          <span className="text-sm">Chart Expected Regret</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={continuous}
            onChange={(e) => setContinuous(e.target.checked)}
            className="size-4"
            disabled={!initialized}
          />
          <span className="text-sm">Continuous</span>
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-3 justify-center">
        <Button onClick={running ? onPause : onStart} variant="default" disabled={!initialized}>
          {running ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={onReset} disabled={!initialized} variant="destructive">Reset</Button>
      </div>
    </div>
  )
}
