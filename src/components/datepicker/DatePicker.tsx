import { useState } from 'react'
import { Button } from '../button'
import { TextField } from '../textfield'
import { DatePickerProps } from './DatePicker.types'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import moment, { Moment } from 'moment'
import { CalendarBlankFilledIcon } from '../../assets/icon'

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
  const [isOpen, setIsOpen] = useState(false)

  const iconSize = size === 'small' ? 'small' : 'medium'

  const handleChange = (selectedDate: string | Moment | null) => {
    if (moment.isMoment(selectedDate)) {
      onChange(selectedDate.format(format))
    }
  }

  return (
    <div className={`ui-datepicker ${size}`}>
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
      {isOpen && (
        <Datetime
          input={false}
          timeFormat={false}
          dateFormat={format}
          value={moment(value, format)}
          onChange={handleChange}
        />
      )}
    </div>
  )
}
