import { useState } from 'react'
import { ArrowsDownUpIcon } from '../../assets/icon'
import { DataTableColumn, DataTableProps, SortType } from './DataTable.types'

export const DataTable = ({ columns, rows }: DataTableProps) => {
  const [value, setValue] = useState(rows)
  const [sortType, setSortType] = useState<SortType>('none')
  const [sortedColumn, setSortedColumn] = useState<string>('none')

  const onSort = ({ sortable, field }: { sortable: boolean; field: string }) => {
    if (!sortable) return

    const currentSortType = sortType === 'none' ? 'ascending' : sortType === 'ascending' ? 'descending' : 'none'

    if (currentSortType === 'none') {
      setValue(rows)
      setSortType('none')
      return
    }

    const sortedValue = value.slice().sort((a, b) => {
      const first = currentSortType === 'ascending' ? a : b
      const second = currentSortType === 'ascending' ? b : a

      if (typeof first[field] === 'number') {
        return (first[field] as number) - (second[field] as number)
      } else if (typeof first[field] === 'string') {
        return (first[field] as string).localeCompare(second[field] as string)
      }
      return 0
    })

    setValue(sortedValue)
    setSortType(currentSortType)
    setSortedColumn(field)
  }

  return (
    <table>
      <thead>
        <tr role="row">
          {columns.map(({ field, header, width, sortable = false }: DataTableColumn) => (
            <th
              role="columnheader"
              scope="col"
              onClick={() => onSort({ sortable, field })}
              aria-sort={sortedColumn === field ? sortType : 'none'}
            >
              <span>{field ?? header}</span>
              {sortable && <ArrowsDownUpIcon aria-label={`Sort by ${header}`} />}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {value.map((row) => (
          <tr role="row" key={row.id}>
            {columns?.map(({ field }) => (
              <td key={field}>{row[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
