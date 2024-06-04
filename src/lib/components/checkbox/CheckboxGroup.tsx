import React from 'react'
import { Checkbox, CheckboxGroupProps, CheckboxItemType } from '.'

const CheckboxGroup = ({ options, checkedOptions, onChange, wrap = false }: CheckboxGroupProps) => {
  return (
    <div className={`ui-checkbox-group ${wrap ? 'wrap' : ''}`}>
      {options.length > 0 &&
        options.map((option: CheckboxItemType) => {
          return (
            <Checkbox
              {...option}
              key={option.id}
              checked={checkedOptions && checkedOptions[option.value]}
              onChange={onChange}
            />
          )
        })}
    </div>
  )
}

export default CheckboxGroup
