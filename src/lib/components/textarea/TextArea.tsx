import { useEffect, useRef } from 'react'
import { TextAreaProps } from '.'

const TextArea = ({
  id,
  value,
  onChange,
  placeholder = '',
  label = '',
  required = false,
  disabled = false,
  autoFocus = false,
  isError = false,
  helperText = '',
  cols = 2,
  resize = false,
}: TextAreaProps) => {
  const DEFAULT_RIGHT_PADDING = {
    small: 7,
    medium: 11,
    large: 11,
  }

  const inputRef = useRef(null)

  useEffect(() => {
    if (autoFocus && inputRef?.current) {
      const current = inputRef.current as HTMLElement
      current.focus()
    }
  }, [autoFocus])

  return (
    <>
      <div
        className={`ui-textarea ${placeholder ? 'placeholder' : ''} ${label ? 'label' : ''} ${
          disabled ? 'disabled' : ''
        } ${isError ? 'isError' : ''} ${value ? 'hasValue' : ''}`}
      >
        <textarea
          className={`ui-textarea-input ${resize ? 'resize' : ''}`}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            paddingLeft: `${DEFAULT_RIGHT_PADDING}px`,
            paddingRight: `${DEFAULT_RIGHT_PADDING}px`,
            height: cols > 2 ? `${cols * 21}px` : '',
          }}
          ref={inputRef}
        />
        {label && (
          <label htmlFor={id} className={`ui-textarea-label ${required ? 'required' : ''}`}>
            {label}
          </label>
        )}
      </div>
      {helperText && <p className={`ui-textarea-helper-text ${isError ? 'isError' : ''}`}>{helperText}</p>}
    </>
  )
}

export default TextArea
