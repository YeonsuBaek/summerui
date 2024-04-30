import React from 'react'
import { CheckboxProps } from '.'
import { Icon } from '../icon'

const Checkbox = ({ id, options, selectedOptions, onSelect, wrap = false, disabled = false }: CheckboxProps) => {
  return (
    <div id={id} className={`ui-checkbox ${wrap ? 'wrap' : ''} ${disabled ? 'disabled' : ''}`}>
      {options.map((option) => (
        <div className="ui-checkbox-option" key={option}>
          <input
            className="ui-checkbox-option-check"
            type="checkbox"
            id={`${id}-${option}`}
            name={id}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => onSelect(option)}
            disabled={disabled}
          />
          <span className={`ui-checkbox-option-icon ${selectedOptions.includes(option) ? 'checked' : ''}`}>
            {selectedOptions.includes(option) && <Icon icon="Check" />}
          </span>
          <label className="ui-checkbox-option-label" htmlFor={`${id}-${option}`}>
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Checkbox
