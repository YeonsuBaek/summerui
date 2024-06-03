import { ChangeEvent, ReactElement } from 'react'
import Checkbox from './Checkbox'

export interface CheckboxProps {
  id: string
  value: string
  text?: string | ReactElement
  checked?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export { Checkbox }
