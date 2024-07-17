import { ReactNode } from 'react'

type CheckboxSize = 'small' | 'medium' | 'large'

export interface CheckboxProps {
  id: string
  children: ReactNode | ReactNode[]
  name: string
  value: string
  size?: CheckboxSize
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

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
