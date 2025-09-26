declare module 'jstat' {
  const jStat: any
  export default jStat
}

declare module 'react-plotly.js' {
  import type { ComponentType } from 'react'
  const Plot: ComponentType<any>
  export default Plot
}

declare module 'react-plotly.js/factory' {
  const createPlotlyComponent: (plotly: any) => any
  export default createPlotlyComponent
}

declare module 'plotly.js-dist-min' {
  const Plotly: any
  export default Plotly
}
