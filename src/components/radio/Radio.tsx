import { ChangeEvent } from 'react'
import { RadioProps } from './Radio.types'
import { CircleFilledIcon } from '../../assets/icon'

export const Radio = ({
  id,
  children,
  name,
  value,
  size = 'medium',
  checked = false,
  onChange = () => {},
  disabled = false,
}: RadioProps) => {
  return (
    <div className={`ui-radio ${size}`}>
      <span className="ui-radio-icon" role="radio" aria-checked={checked} aria-disabled={disabled}>
        {checked && <CircleFilledIcon size={12} />}
      </span>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
        disabled={disabled}
        aria-labelledby={`${id}-label`}
      />
      <label className="ui-radio-label" htmlFor={id} id={`${id}-label`}>
        {children}
      </label>
    </div>
  )
}
