import { Radio } from '../radio/Radio'
import { OptionType, RadioGroupProps } from './RadioGroup.types'

export const RadioGroup = ({
  options,
  name,
  checkedOption,
  label = '',
  size = 'medium',
  direction = 'horizontal',
  onChange = () => {},
}: RadioGroupProps) => {
  return (
    <fieldset className="ui-radio-group">
      {label && <legend className="ui-radio-group-label">{label}</legend>}
      <div className={`ui-radio-group-options ${direction}`}>
        {options.map(({ id, value, label, disabled = false }: OptionType) => (
          <Radio
            id={id}
            value={value}
            name={name}
            size={size}
            checked={checkedOption === value}
            onChange={() => onChange(value)}
            disabled={disabled}
          >
            {label}
          </Radio>
        ))}
      </div>
    </fieldset>
  )
}
