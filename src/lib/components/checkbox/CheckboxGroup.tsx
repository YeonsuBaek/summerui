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
    // <div id={id} className={`ui-checkbox ${wrap ? 'wrap' : ''} ${disabled ? 'disabled' : ''}`}>
    //   {options.map((option) => (
    //     <div className="ui-checkbox-option" key={option}>
    //       <input
    //         className="ui-checkbox-option-check"
    //         type="checkbox"
    //         id={`${id}-${option}`}
    //         name={id}
    //         value={option}
    //         checked={selectedOptions.includes(option)}
    //         onChange={() => onSelect(option)}
    //         disabled={disabled}
    //       />
    //       <span className={`ui-checkbox-option-icon ${selectedOptions.includes(option) ? 'checked' : ''}`}>
    //         {selectedOptions.includes(option) && <Icon icon="Check" />}
    //       </span>
    //       <label className="ui-checkbox-option-label" htmlFor={`${id}-${option}`}>
    //         {option}
    //       </label>
    //     </div>
    //   ))}
    // </div>
  )
}

export default CheckboxGroup
