import { Checkbox } from './Checkbox'
import { CheckboxGroupProps, OptionType } from './Checkbox.types'

export const CheckboxGroup = ({
  options,
  name,
  label = '',
  size = 'medium',
  direction = 'horizontal',
  checkedOptions = [],
  onChange = () => {},
}: CheckboxGroupProps) => {
  const handleChange = (value: string, checked: boolean) => {
    const newSelectedOptions = checked ? [...checkedOptions, value] : checkedOptions.filter((item) => item !== value)
    onChange(newSelectedOptions)
  }

  return (
    <fieldset className="ui-checkbox-group">
      {label && <legend className="ui-checkbox-group-label">{label}</legend>}
      <div className={`ui-checkbox-group-options ${direction}`}>
        {options.map(({ id, value, label, disabled = false }: OptionType) => (
          <Checkbox
            id={id}
            value={value}
            name={name}
            size={size}
            checked={checkedOptions.includes(value)}
            onChange={(checked) => handleChange(value, checked)}
            disabled={disabled}
          >
            {label}
          </Checkbox>
        ))}
      </div>
    </fieldset>
  )
}
