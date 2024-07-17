import { ReactNode } from 'react'

export type RadioSize = 'small' | 'medium' | 'large'

export interface RadioProps {
  id: string
  children: ReactNode | ReactNode[]
  name: string
  value: string
  size?: RadioSize
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}
