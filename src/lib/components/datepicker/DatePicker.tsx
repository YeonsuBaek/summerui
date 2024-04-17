import React, { ChangeEvent, useEffect, useMemo } from 'react'
import { IconButton } from '../button'
import { DatePickerProps } from '.'
import { TextField } from '../textfield'
import moment from 'moment'

const DatePicker = ({
  id,
  size = 'medium',
  value,
  setValue,
  format = 'YYYY/MM/DD',
  disabled = false,
}: DatePickerProps) => {
  const iconSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size])

  const getSeparator = () => {
    const regex = /[^0-9a-zA-Z]+/
    const match = format.match(regex)

    if (match) {
      const symbol = match[0]
      const indexes = []

      for (let i = 0; i < format.length; i++) {
        if (format[i] === symbol) {
          indexes.push(i)
        }
      }

      return { symbol, indexes }
    }
    return { symbol: undefined, indexes: [] }
  }

  const { symbol, indexes } = getSeparator()

  const handleCursorPosition = (target: HTMLInputElement) => {
    const { value, selectionStart } = target
    let cursorPosition = selectionStart || value.length

    if (cursorPosition === value.length) {
      cursorPosition += 1
    }

    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition)
    })
  }

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const { value } = target

    handleCursorPosition(target)

    let currentDate = value
      .split('')
      .filter((str) => str !== symbol)
      .join('')

    if (symbol && indexes.length > 0) {
      indexes.forEach((index) => {
        if (currentDate.length > index) {
          currentDate = currentDate.slice(0, index) + symbol + currentDate.slice(index)
        }
      })
    }
    setValue(currentDate)
  }

  const checkValidDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const selectedDate = moment(value, format, true)
    const isValid = selectedDate.isValid()

    if (!isValid) {
      setValue('')
    }
  }

  return (
    <div className={`ui-datepicker ${size} ${disabled ? 'disabled' : ''}`}>
      <TextField
        id={id}
        value={value}
        onChange={handleChangeDate}
        placeholder={format}
        size={size}
        disabled={disabled}
        onBlur={checkValidDate}
      />
      <IconButton
        className="ui-datepicker-icon"
        icon="Calendar"
        variant="secondary"
        onClick={() => alert('click')}
        size={iconSize}
        disabled={disabled}
      />
    </div>
  )
}

export default DatePicker
