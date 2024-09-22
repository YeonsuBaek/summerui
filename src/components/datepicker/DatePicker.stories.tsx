import type { Meta } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { useState } from 'react'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
}

export default meta

export const SizeOfDatePicker = () => {
  const [date, setDate] = useState('')
  return (
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DatePicker size="small" id="storybook-datepicker-sm" label="Small" value={date} onChange={setDate} />
        <DatePicker id="storybook-datepicker-md" label="Medium" value={date} onChange={setDate} />
        <DatePicker size="large" id="storybook-datepicker-lg" label="Large" value={date} onChange={setDate} />
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DatePicker size="small" id="storybook-datepicker-sm" label="Small" value={date} onChange={setDate} />
        <DatePicker id="storybook-datepicker-md" label="Medium" value={date} onChange={setDate} />
        <DatePicker size="large" id="storybook-datepicker-lg" label="Large" value={date} onChange={setDate} />
      </div>
    </>
  )
}

export const FormatOfDatePicker = () => {
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [date3, setDate3] = useState('')
  const [date4, setDate4] = useState('')
  const [date5, setDate5] = useState('')

  return (
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DatePicker id="storybook-datepicker-format-1" label="YYYY/MM/DD" value={date1} onChange={setDate1} />
        <DatePicker
          id="storybook-datepicker-format-2"
          format="YYYYMMDD"
          label="YYYYMMDD"
          value={date2}
          onChange={setDate2}
        />
        <DatePicker
          id="storybook-datepicker-format-3"
          format="YYYY.MM.DD"
          label="YYYY.MM.DD"
          value={date3}
          onChange={setDate3}
        />
        <DatePicker
          id="storybook-datepicker-format-4"
          format="YYYY-MM-DD"
          label="YYYY-MM-DD"
          value={date4}
          onChange={setDate4}
        />
        <DatePicker
          id="storybook-datepicker-format-5"
          format="YYMMDD"
          label="YYMMDD"
          value={date5}
          onChange={setDate5}
        />
      </div>
    </>
  )
}

export const DisabledDatePicker = () => {
  const [date, setDate] = useState('')
  return (
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DatePicker
          id="storybook-datepicker-readonly"
          label="ReadOnly DatePicket"
          value={date}
          onChange={setDate}
          readOnly
        />
        <DatePicker
          id="storybook-datepicker-disabled"
          label="Disabled DatePicket"
          value={date}
          onChange={setDate}
          disabled
        />
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DatePicker
          id="storybook-datepicker-readonly-dark"
          label="ReadOnly DatePicket"
          value={date}
          onChange={setDate}
          readOnly
        />
        <DatePicker
          id="storybook-datepicker-disabled-dark"
          label="Disabled DatePicket"
          value={date}
          onChange={setDate}
          disabled
        />
      </div>
    </>
  )
}
