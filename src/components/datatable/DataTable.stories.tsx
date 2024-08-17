import type { Meta } from '@storybook/react'
import { DataTable } from '.'

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
}

export default meta

export const Example = () => {
  const people = [
    {
      id: 'ys',
      birth: '2000-08-25',
      name: 'ys',
      age: 25,
      location: 'suwon',
      gender: 'woman',
    },
    {
      id: 'jp',
      birth: '1981-06-22',
      name: 'jp',
      age: 44,
      location: 'anyang',
      gender: 'man',
    },
    {
      id: 'dj',
      birth: '1989-07-04',
      name: 'dj',
      age: 36,
      location: 'seoul',
      gender: 'man',
    },
  ]

  const information = [
    { field: 'name', header: 'Name', sortable: true, width: 120 },
    { field: 'age', header: 'age', sortable: true, width: 200 },
    { field: 'gender', header: 'gender', width: 80 },
  ]

  return (
    <>
      <div style={{ padding: '16px' }}>
        <DataTable columns={information} rows={people} />
      </div>
      <div className="theme-dark" style={{ padding: '16px' }}>
        <DataTable columns={information} rows={people} />
      </div>
    </>
  )
}
