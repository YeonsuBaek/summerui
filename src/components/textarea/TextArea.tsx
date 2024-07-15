import { ChangeEvent, useEffect, useMemo, useRef } from 'react'
import { TextAreaProps } from './TextArea.types'

export const TextArea = ({
  id,
  value,
  onChange = () => {},
  size = 'medium',
  placeholder = '',
  label = '',
  maxLength,
  rows = 3,
  helperText = '',
  error = false,
  errorText = '',
  autoFocus = false,
  readOnly = false,
  disabled = false,
  ...props
}: TextAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const valueLength = useMemo(() => value.length, [value])
  const isMaxValueLength = useMemo(() => maxLength && valueLength > maxLength, [valueLength, maxLength])

  const hasError = error || isMaxValueLength
  const isDisabled = disabled || readOnly

  const hasHelperText = error ? !errorText : helperText
  const hasErrorText = errorText && error

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      const current = inputRef.current
      current.focus()
    }
  }, [autoFocus])

  return (
    <div className="ui-textarea">
      {label !== '' && (
        <label className="ui-textarea-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`ui-textarea-input ${size} ${readOnly ? 'read-only' : ''} ${disabled ? 'is-disabled' : ''} ${
          hasError ? 'is-error' : ''
        }`}
      >
        <textarea
          id={id}
          value={value}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          disabled={isDisabled}
          ref={inputRef}
          aria-describedby={hasErrorText ? `${id}-error` : hasHelperText ? `${id}-helper` : undefined}
          {...props}
        />
      </div>
      <div className="ui-textarea-info">
        {(hasErrorText || hasHelperText) && (
          <p
            id={hasError ? `${id}-error` : `${id}-helper`}
            className={`ui-textarea-msg ${hasErrorText || isMaxValueLength ? 'error' : ''} `}
          >
            {hasErrorText ? errorText : helperText}
          </p>
        )}
        {maxLength && (
          <span>
            <strong className={`value-length ${isMaxValueLength ? 'max' : ''}`}>{valueLength}</strong>/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}
