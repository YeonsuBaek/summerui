import { ChangeEvent, ReactElement } from 'react'
import CheckboxItem from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

export interface CheckboxItemType {
  id: string
  value: string
  text?: string | ReactElement
  disabled?: boolean
}
export interface CheckboxProps extends CheckboxItemType {
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface CheckboxGroupProps {
  options: CheckboxItemType[]
  checkedOptions?: { [key: string]: boolean }
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  wrap?: boolean
}

export const Checkbox = Object.assign(CheckboxItem, {
  Group: CheckboxGroup,
})
