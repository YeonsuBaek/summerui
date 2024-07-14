import { TextFieldProps } from './TextField.types'
import { useRef, useEffect, ChangeEvent } from 'react'

export const TextField = ({
  id,
  value,
  onChange = () => {},
  size = 'medium',
  type = 'text',
  placeholder = '',
  label = '',
  helperText = '',
  isError = false,
  errorText = '',
  autoFocus = false,
  readOnly = false,
  disabled = false,
}: TextFieldProps) => {
  const inputRef = useRef(null)

  const isDisabled = disabled || readOnly

  const hasHelperText = isError ? !errorText : helperText
  const hasErrorText = errorText && isError

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      const current = inputRef.current as HTMLElement
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
        className={`ui-textfield-input ${size} ${readOnly ? 'read-only' : ''} ${disabled ? 'is-disabeld' : ''} ${
          isError ? 'is-error' : ''
        }`}
      >
        <input
          id={id}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
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
