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
