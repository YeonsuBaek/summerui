import React from 'react'
import { CheckboxProps } from '.'
import { Icon } from '../icon'

const Checkbox = ({ id, value, text, checked = false, onChange, disabled = false }: CheckboxProps) => {
  return (
    <div className={`ui-checkbox ${disabled ? 'disabled' : ''}`}>
      <input
        className="ui-checkbox-check"
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={(e) => onChange && onChange(e)}
        disabled={disabled}
      />
      <span className={`ui-checkbox-icon ${checked ? 'checked' : ''}`}>{checked && <Icon icon="Check" />}</span>
      <label className="ui-checkbox-label" htmlFor={id}>
        {text || value}
      </label>
    </div>
  )
}

export default Checkbox
