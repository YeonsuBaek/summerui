import { TextFieldProps, TextFieldType, TextFieldValue } from './TextField.types'
import { useRef, useEffect, ChangeEvent } from 'react'

export const TextField = <Type extends TextFieldType = 'text'>({
  id,
  value,
  onChange = () => {},
  size = 'medium',
  type,
  placeholder = '',
  label = '',
  helperText = '',
  isError = false,
  errorText = '',
  autoFocus = false,
  readOnly = false,
  disabled = false,
}: TextFieldProps<Type>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const inputType = type || 'text'
  const isDisabled = disabled || readOnly

  const hasHelperText = isError ? !errorText : helperText
  const hasErrorText = errorText && isError

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      const current = inputRef.current
      current.focus()
    }
  }, [autoFocus])

  return (
    <div className="ui-textfield">
      {label !== '' && (
        <label className="ui-textfield-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`ui-textfield-input ${size} ${readOnly ? 'read-only' : ''} ${disabled ? 'is-disabled' : ''} ${
          isError ? 'is-error' : ''
        }`}
      >
        <input
          id={id}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value as TextFieldValue<Type>)}
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          ref={inputRef}
        />
      </div>
      {hasHelperText && <p className="ui-textfield-msg helper">{helperText}</p>}
      {hasErrorText && <p className="ui-textfield-msg error">{errorText}</p>}
    </div>
  )
}
