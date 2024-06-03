import React, { ChangeEvent } from 'react'
import { RadioGroupProps } from '.'

const RadioGroup = ({ id, options, selectedOption, onSelect, direction = 'vertical' }: RadioGroupProps) => {
  return (
    <div id={id} className={`ui-radio-group ${direction}`}>
      {options.map((option) => (
        <div className="ui-radio-option" key={option.id}>
          <input
            className="ui-radio-option-radio"
            type="radio"
            id={`${id}-${option.id}`}
            name={id}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onSelect(e.target.value)}
            disabled={option.disabled}
          />
          <label
            className={`ui-radio-option-label ${selectedOption === option.value ? 'selected' : ''} ${
              option.disabled ? 'disabled' : ''
            }`}
            htmlFor={`${id}-${option.id}`}
          >
            <div className={`ui-radio-option-label-icon `}></div>
            {option.text}
          </label>
        </div>
      ))}
    </div>
  )
}

export default RadioGroup
