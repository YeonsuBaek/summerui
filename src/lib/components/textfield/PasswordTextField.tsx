import React, { useEffect, useMemo, useRef, useState } from 'react'
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
  autoFocus = false,
  isError = false,
  helperText = '',
}: DefaultTextFieldProps) => {
  const inputRef = useRef(null)
  const [isShow, setIsShow] = useState(false)
  const iconSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size])

  useEffect(() => {
    if (autoFocus && inputRef?.current) {
      const current = inputRef.current as HTMLElement
      current.focus()
    }
  }, [autoFocus])

  return (
    <>
      <div
        className={`ui-textfield ${size} ${placeholder ? 'placeholder' : ''} ${
          label && size === 'large' ? 'label' : ''
        } ${disabled ? 'disabled' : ''} ${isError ? 'isError' : ''}`}
      >
        <input
          className="ui-textfield-input"
          type={isShow ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          ref={inputRef}
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
      {helperText && <p className={`ui-textfield-helper-text ${isError ? 'isError' : ''}`}>{helperText}</p>}
    </>
  )
}

export default PasswordTextField
