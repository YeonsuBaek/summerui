import React, { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'
import DatePicker from './DatePicker'

describe('DatePicker test', () => {
  test('TextArea toggle calendar', () => {
    const { container, getByRole } = render(<DatePicker id="test-datepicker-1" value="value" setValue={() => {}} />)

    const button = getByRole('button')

    fireEvent.click(button)

    const calendar = container.querySelector('.ui-datepicker-calendar')
    expect(calendar).toBeTruthy()

    fireEvent.click(document.body)
    const renderedCalendar = container.querySelector('.ui-datepicker-calendar')
    expect(renderedCalendar).toBeFalsy()
  })

  test('DatePicker is autoformatting', () => {
    const TestDatePickerComponent = () => {
      const [value, setValue] = useState('')

      return <DatePicker id="test-datepicker-2" value={value} setValue={(val) => setValue(val)} />
    }

    const { container } = render(<TestDatePickerComponent />)

    const textfield = container.querySelector('#test-datepicker-2') as HTMLInputElement
    fireEvent.change(textfield, { target: { value: '20240101' } })

    const result = container.querySelector('#test-datepicker-2')?.getAttribute('value')
    expect(result).toBe('2024/01/01')
  })

  test('DatePicker check valid date', () => {
    const TestDatePickerComponent = () => {
      const [value, setValue] = useState('')

      return <DatePicker id="test-datepicker-3" value={value} setValue={(val) => setValue(val)} />
    }

    const { container } = render(<TestDatePickerComponent />)

    const textfield = container.querySelector('#test-datepicker-3') as HTMLInputElement
    fireEvent.change(textfield, { target: { value: 'abcd' } })

    fireEvent.blur(textfield)
    const result = container.querySelector('#test-datepicker-3')?.getAttribute('value')
    expect(result).toBe('')
  })

  test('Datepicker select date', () => {
    const TestDatePickerComponent = () => {
      const [value, setValue] = useState('')

      return <DatePicker id="test-datepicker-4" value={value} setValue={(val) => setValue(val)} />
    }

    const { container, getByRole, getByPlaceholderText } = render(<TestDatePickerComponent />)

    const button = getByRole('button')
    const textfield = getByPlaceholderText('YYYY/MM/DD') as HTMLInputElement
    expect(button).toBeTruthy()
    expect(textfield).toBeTruthy()

    fireEvent.click(button)

    const picker = container.querySelectorAll('.ui-datepicker-calendar .rdtDay:not(.rdtDisabled)')
    expect(picker.length > 0).toBeTruthy()

    const aDay = picker[picker.length - 1]
    fireEvent.click(aDay)

    const year = aDay.getAttribute('data-year') || ''
    const month = aDay.getAttribute('data-month') || ''
    const day = aDay.getAttribute('data-value') || ''

    let monthValue = month
    if (parseInt(month, 10)) {
      const num = parseInt(month, 10) + 1
      monthValue = num > 9 ? num.toString() : `0${num}`
    }

    let dayValue = month
    if (parseInt(day, 10)) {
      const num = parseInt(day, 10)
      dayValue = num > 9 ? num.toString() : `0${num}`
    }

    const result = container.querySelector('#test-datepicker-4')?.getAttribute('value')
    expect(result).toBe(`${year}/${monthValue}/${dayValue}`)
  })
})
