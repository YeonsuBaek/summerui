import { RadioSize } from '../radio/Radio.types'

export type OptionType = {
  id: string
  value: string
  label: string
  disabled?: boolean
}

export interface RadioGroupProps {
  options: OptionType[]
  name: string
  checkedOption: string
  label?: string
  size?: RadioSize
  direction?: 'horizontal' | 'vertical'
  onChange?: (checkedOptions: string) => void
}
