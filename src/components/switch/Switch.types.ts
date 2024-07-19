import { ReactNode } from 'react'

type SwitchSize = 'small' | 'medium' | 'large'

export interface SwitchProps {
  id: string
  children?: ReactNode | ReactNode[]
  size?: SwitchSize
  checked?: boolean
  onChecked?: (checked: boolean) => void
  disabled?: boolean
}
