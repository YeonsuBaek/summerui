import React, { useMemo, useState } from 'react'
import { DefaultTextFieldProps } from '.'
import { IconButton } from '../button'

const PasswordTextField = ({
  id,
  value,
  onChange,
  placeholder = '',
  size = 'medium',
  label = '',
  required = false,
  disabled = false,
}: DefaultTextFieldProps) => {
  const [isShow, setIsShow] = useState(false)
  const iconSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size])

  return (
    <div
      className={`ui-textfield ${size} ${placeholder ? 'placeholder' : ''} ${
        label && size === 'large' ? 'label' : ''
      } ${disabled ? 'disabled' : ''}`}
    >
      <input
        className="ui-textfield-input"
        type={isShow ? 'text' : 'password'}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {label && size === 'large' && (
        <label htmlFor={id} className={`ui-textfield-label ${required ? 'required' : ''}`}>
          {label}
        </label>
      )}
      <IconButton
        icon={isShow ? 'Eye' : 'EyeInvisible'}
        variant="secondary"
        onClick={() => setIsShow((prev) => !prev)}
        size={iconSize}
        disabled={disabled}
      />
    </div>
  )
}

export default PasswordTextField
