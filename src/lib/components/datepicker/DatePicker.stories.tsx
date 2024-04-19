import type { ComponentStory, Meta } from '@storybook/react'
import { DatePicker } from '.'
import { useState } from 'react'

const meta: Meta<typeof DatePicker> = {
  title: 'Component/DatePicker',
  component: DatePicker,
  argTypes: {
    size: ['small', 'medium', 'large'],
    disabled: [true, false],
  },
}

export default meta

const DatePickerTemplate: ComponentStory<typeof DatePicker> = (args) => {
  const [date, setDate] = useState('')

  return (
    <div style={{ width: '320px' }}>
      <DatePicker {...args} id="datepicker-storybook-1" value={date} setValue={(val: string) => setDate(val)} />
    </div>
  )
}

export const Interactive = DatePickerTemplate.bind({})
Interactive.args = {
  format: 'YYYY-MM-DD',
  size: 'medium',
}

export const DefaultDatePicker = () => {
  return (
    <div style={{ width: '320px' }}>
      <DatePicker id="datepicker-storybook-2" value="" setValue={() => {}} />
      <br />
      <DatePicker id="datepicker-storybook-3" value="2024/01/01" setValue={() => {}} />
      <br />
      <DatePicker id="datepicker-storybook-4" value="2024/01/01" setValue={() => {}} disabled />
    </div>
  )
}

export const DatePickerSize = () => {
  return (
    <div style={{ width: '320px' }}>
      <DatePicker id="datepicker-storybook-5" size="small" value="" setValue={() => {}} />
      <br />
      <DatePicker id="datepicker-storybook-6" size="medium" value="" setValue={() => {}} />
      <br />
      <DatePicker id="datepicker-storybook-7" size="large" value="" setValue={() => {}} />
    </div>
  )
}
