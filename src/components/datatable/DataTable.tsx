import { KeyboardEvent, useCallback, useState } from 'react'
import { ArrowsDownUpIcon } from '../../assets/icon'
import { DataTableColumn, DataTableProps, SortType } from './DataTable.types'

export const DataTable = ({ columns, rows }: DataTableProps) => {
  const [value, setValue] = useState(rows)
  const [sortType, setSortType] = useState<SortType>('none')
  const [sortedColumn, setSortedColumn] = useState<string>('none')

  const onSort = useCallback(
    ({ sortable, field }: { sortable: boolean; field: string }) => {
      if (!sortable) return

      let currentSortType: SortType
      if (field !== sortedColumn) {
        currentSortType = 'ascending'
      } else {
        currentSortType = sortType === 'none' ? 'ascending' : sortType === 'ascending' ? 'descending' : 'none'
      }

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
    },
    [rows, sortType, value]
  )

  const isSortedColumn = (field: string) => {
    return sortType !== 'none' && sortedColumn === field
  }

  const onEnter = (e: KeyboardEvent, { sortable, field }: { sortable: boolean; field: string }) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSort({ sortable, field })
    }
  }

  return (
    <table className="ui-datatable">
      <thead>
        <tr className="ui-header" role="row">
          {columns.map(({ field, header, width, sortable = false }: DataTableColumn) => (
            <th
              className={`ui-column ${sortable ? 'sortable' : ''}`}
              key={field}
              role="columnheader"
              scope="col"
              onClick={() => onSort({ sortable, field })}
              aria-sort={sortedColumn === field ? sortType : 'none'}
              style={{ width: width ? `${width / 16}rem` : 'auto' }}
              tabIndex={0}
              onKeyDown={(e) => onEnter(e, { sortable, field })}
            >
              <div className={`ui-column-value ${isSortedColumn(field) ? 'sorted' : ''}`}>
                <span>{field ?? header}</span>
                {sortable && <ArrowsDownUpIcon size={16} aria-label={`Sort by ${header}`} />}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="ui-body">
        {value.map((row) => (
          <tr className="ui-row" role="row" key={row.id}>
            {columns?.map(({ field }) => (
              <td className="ui-content" key={field}>
                <span className={`ui-content-value  ${typeof row[field] === 'number' ? 'center' : ''}`}>
                  {row[field]}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
