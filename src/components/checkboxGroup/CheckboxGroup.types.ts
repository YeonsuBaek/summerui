import { CheckboxSize } from '../checkbox/Checkbox.types'

export type OptionType = {
  id: string
  value: string
  label: string
  disabled?: boolean
}

export interface CheckboxGroupProps {
  options: OptionType[]
  name: string
  label?: string
  size?: CheckboxSize
  direction?: 'horizontal' | 'vertical'
  checkedOptions?: string[]
  onChange?: (checkedOptions: string[]) => void
}
