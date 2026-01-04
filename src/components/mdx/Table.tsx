import { ReactNode } from 'react'

interface TableProps {
  children?: ReactNode
  [key: string]: unknown
}

export default function Table({ children, ...props }: TableProps) {
  return (
    <div className="table-wrapper my-6 overflow-x-auto">
      <table {...props}>{children}</table>
    </div>
  )
}
