import { ChangeEvent } from 'react'
import { CheckIcon } from '../../assets/icon'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox = ({
  id,
  children,
  name,
  value,
  size = 'medium',
  checked = false,
  onChange = () => {},
  disabled = false,
}: CheckboxProps) => {
  const iconSize = size === 'small' ? 12 : size === 'large' ? 20 : 16
  return (
    <div className="ui-checkbox">
      <span className={`ui-checkbox-icon ${size}`} role="checkbox" aria-checked={checked} aria-disabled={disabled}>
        {checked && <CheckIcon size={iconSize} />}
      </span>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
        disabled={disabled}
        aria-labelledby={`${id}-label`}
      />
      <label className={`ui-checkbox-label ${size}`} htmlFor={id} id={`${id}-label`}>
        {children}
      </label>
    </div>
  )
}
