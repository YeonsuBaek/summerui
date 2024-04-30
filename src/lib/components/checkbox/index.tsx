import Checkbox from './Checkbox'

export interface CheckboxProps {
  id: string
  options: string[]
  selectedOptions: string[]
  onSelect: (item: string) => void
  wrap?: boolean
  disabled?: boolean
}

export { Checkbox }
