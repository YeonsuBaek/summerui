import { ReactNode } from 'react'

export type SortType = 'none' | 'ascending' | 'descending'

export type DataTableColumn = {
  field: string
  header?: string
  width?: number
  sortable?: boolean
}

export type DataTableRow = {
  id: string
  [key: string]: string | number | ReactNode
}

export interface DataTableProps {
  columns: DataTableColumn[]
  rows: DataTableRow[]
}
