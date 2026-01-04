import jStat from 'jstat'

// Beta PDF at x for parameters alpha and beta
export function betaPdf(x: number, alpha: number, beta: number): number {
  if (x <= 0 || x >= 1) return 0
  const anyJ = jStat as unknown as { beta: { pdf: (x: number, a: number, b: number) => number } }
  return anyJ.beta.pdf(x, alpha, beta)
}
