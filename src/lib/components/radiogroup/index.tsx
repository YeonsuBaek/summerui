import { ReactElement } from 'react'
import RadioGroup from './RadioGroup'

export interface RadioOptionProps {
  value: string
  text?: string | ReactElement
  id?: string
  disabled?: boolean
}

export interface RadioGroupProps {
  id: string
  options: RadioOptionProps[]
  selectedOption: string
  onSelect: (item: string) => void
}

export { RadioGroup }
