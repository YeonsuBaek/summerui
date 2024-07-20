import { useEffect, useRef, useState } from 'react'
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

  const handleChange = (selectedDate: string | Moment | null) => {
    if (moment.isMoment(selectedDate)) {
      onChange(selectedDate.format(format))
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
      <div ref={inputRef}>
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
          onChange={onChange}
        >
          <Button styleType="icon" size={iconSize} onClick={() => setIsOpen((prev) => !prev)}>
            <CalendarBlankFilledIcon />
          </Button>
        </TextField>
      </div>
      {isOpen && (
        <div ref={calendarRef} className="ui-datepicker-calendar">
          <Datetime
            open={isOpen}
            input={false}
            timeFormat={false}
            dateFormat={format}
            value={moment(value, format)}
            onChange={handleChange}
            locale="ko"
          />
        </div>
      )}
    </div>
  )
}
