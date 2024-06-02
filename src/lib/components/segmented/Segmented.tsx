import React, { ChangeEvent } from 'react'
import { SegmentedProps } from '.'

const Segmented = ({
  id,
  options,
  selectedOption,
  onSelect,
  size = 'medium',
  width = 'full',
  disabled = false,
}: SegmentedProps) => {
  return (
    <div id={id} className={`ui-segmented ${size} ${width}`}>
      {options.map((option) => (
        <div className={`ui-segmented-option ${disabled ? 'disabled' : ''}`} key={option.id}>
          <input
            className="ui-segmented-option-radio"
            type="radio"
            id={`${id}-${option.id}`}
            name={id}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onSelect(e.target.value)}
            disabled={disabled}
          />
          <label className="ui-segmented-option-label" htmlFor={`${id}-${option.id}`}>
            {option.text}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Segmented
