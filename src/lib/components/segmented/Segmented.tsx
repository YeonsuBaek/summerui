import React from 'react'
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
        <div className={`ui-segmented-option ${disabled ? 'disabled' : ''}`} key={option}>
          <input
            className="ui-segmented-option-radio"
            type="radio"
            id={`${id}-${option}`}
            name={id}
            value={option}
            checked={selectedOption === option}
            onChange={() => onSelect(option)}
            disabled={disabled}
          />
          <label className="ui-segmented-option-label" htmlFor={`${id}-${option}`}>
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Segmented
