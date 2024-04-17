import React, { useMemo } from 'react'
import { IconButton } from '../button'
import { DatePickerProps } from '.'
import { TextField } from '../textfield'

const DatePicker = ({
  id,
  size = 'medium',
  value,
  onChange,
  format = 'YYYY/MM/DD',
  disabled = false,
}: DatePickerProps) => {
  const iconSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size])

  return (
    <div className={`ui-datepicker ${size} ${disabled ? 'disabled' : ''}`}>
      <TextField id={id} value={value} onChange={onChange} placeholder={format} size={size} disabled={disabled} />
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
