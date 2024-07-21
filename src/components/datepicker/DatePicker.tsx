import { FocusEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import { TextField } from '../textfield'
import { DatePickerProps } from './DatePicker.types'
import Datetime from 'react-datetime'
import moment, { Moment } from 'moment'
import { CalendarBlankFilledIcon } from '../../assets/icon'
import 'moment/locale/ko'

export const DatePicker = ({
  id,
  value,
  onChange = () => {},
  size = 'medium',
  format = 'YYYY/MM/DD',
  autoFormatting = true,
  label = '',
  helperText = '',
  isError = false,
  errorText = '',
  autoFocus = false,
  readOnly = false,
  disabled = false,
}: DatePickerProps) => {
  const inputRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const iconSize = size === 'small' ? 'small' : 'medium'

  const getSeparator = useCallback(() => {
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
  }, [format])

  const applyFormat = useCallback(
    (date: string) => {
      const { symbol, indexes } = getSeparator()
      let formattedDate = date

      if (symbol && indexes.length > 0) {
        indexes.forEach((index) => {
          if (index < formattedDate.length && formattedDate[index] !== symbol) {
            formattedDate = formattedDate.slice(0, index) + symbol + formattedDate.slice(index)
          }
        })
      }

      return formattedDate
    },
    [getSeparator]
  )

  const handleChangeDateText = (selectedDate: string) => {
    const cleanedDate = selectedDate.replace(/[^\d]/g, '')
    const formattedDate = applyFormat(cleanedDate)

    if (autoFormatting) {
      onChange(formattedDate)
    } else {
      onChange(selectedDate)
    }
  }

  const handleChange = (value: string) => {
    if (inputRef.current) {
      const input = inputRef.current.querySelector('input') as HTMLInputElement
      const cursorStart = input.selectionStart ?? 0

      handleChangeDateText(value)

      requestAnimationFrame(() => {
        input.selectionStart = cursorStart + 1
      })
    }
  }

  const handleChangeDateClick = (selectedDate: string | Moment | null) => {
    if (moment.isMoment(selectedDate)) {
      onChange(selectedDate.format(format))
    }
  }

  const checkValidDate = () => {
    const selectedDate = moment(value, format, true)
    const isValid = selectedDate.isValid()

    if (!isValid) {
      onChange('')
    }
  }

  const handleClickOut = (e: MouseEvent) => {
    if (inputRef?.current && calendarRef?.current) {
      const inputArea = inputRef.current
      const calendarArea = calendarRef.current
      const target = e.target as HTMLElement
      if (!inputArea.contains(target) && !calendarArea.contains(target)) {
        setIsOpen(false)
      }
    }
  }

  useEffect(() => {
    if (isOpen && inputRef?.current && calendarRef?.current) {
      document.addEventListener('click', handleClickOut)
      return () => document.removeEventListener('click', handleClickOut)
    }
  }, [isOpen])

  return (
    <div className={`ui-datepicker ${size}`}>
      <div ref={inputRef} onBlur={checkValidDate}>
        <TextField
          id={id}
          value={value}
          size={size}
          placeholder={format}
          label={label}
          helperText={helperText}
          isError={isError}
          errorText={errorText}
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
          onChange={handleChange}
        >
          <Button
            styleType="icon"
            size={iconSize}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-controls={`${id}-calendar`}
            disabled={disabled || readOnly}
          >
            <CalendarBlankFilledIcon />
          </Button>
        </TextField>
      </div>
      {isOpen && (
        <div ref={calendarRef} id={`${id}-calendar`} className="ui-datepicker-calendar">
          <Datetime
            open={isOpen}
            input={false}
            timeFormat={false}
            dateFormat={format}
            value={moment(value, format)}
            onChange={handleChangeDateClick}
            locale="ko"
          />
        </div>
      )}
    </div>
  )
}
