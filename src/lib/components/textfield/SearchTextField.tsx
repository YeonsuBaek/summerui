import React, { useEffect, useMemo, useRef } from 'react'
import { SearchTextFieldProps } from '.'
import { Icon } from '../icon'

const SearchTextField = ({
  id,
  value,
  onChange,
  placeholder = '',
  size = 'medium',
  onSearch,
}: SearchTextFieldProps) => {
  const inputRef = useRef(null)
  const searchIconSize = useMemo(() => (size === 'large' ? 'small' : 'xsmall'), [size])

  return (
    <>
      <div className="ui-textfield-search">
        <div className={`ui-textfield ${size} ${placeholder ? 'placeholder' : ''}`}>
          <input
            className="ui-textfield-input"
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            ref={inputRef}
          />
        </div>
        <button type="button" className={`ui-textfield-search-button ${size}`} onClick={onSearch}>
          <Icon icon="Search" size={searchIconSize} />
        </button>
      </div>
    </>
  )
}

export default SearchTextField
