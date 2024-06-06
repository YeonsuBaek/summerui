import React, { useEffect, useMemo, useRef } from 'react'
import { SearchTextFieldProps } from '.'
import { Icon } from '../icon'

const SearchTextField = ({
  id,
  value,
  onChange,
  placeholder = '',
  size = 'medium',
  disabled = false,
  autoFocus = false,
  isError = false,
  helperText = '',
  onSearch,
}: SearchTextFieldProps) => {
  const inputRef = useRef(null)

  const searchSize = useMemo(() => (size === 'large' ? 'large' : 'medium'), [size])
  const searchIconSize = useMemo(() => (size === 'large' ? 'small' : 'xsmall'), [size])

  useEffect(() => {
    if (autoFocus && inputRef?.current) {
      const current = inputRef.current as HTMLElement
      current.focus()
    }
  }, [autoFocus])

  return (
    <>
      <div className="ui-textfield-search">
        <div
          className={`ui-textfield ${searchSize} ${placeholder ? 'placeholder' : ''} ${disabled ? 'disabled' : ''} ${
            isError ? 'isError' : ''
          } ${value ? 'hasValue' : ''}`}
        >
          <input
            className="ui-textfield-input"
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            ref={inputRef}
          />
        </div>
        <button type="button" className={`ui-textfield-search-button ${size}`} onClick={onSearch}>
          <Icon icon="Search" size={searchIconSize} />
        </button>
      </div>
      {helperText && <p className={`ui-textfield-helper-text ${isError ? 'isError' : ''}`}>{helperText}</p>}
    </>
  )
}

export default SearchTextField
