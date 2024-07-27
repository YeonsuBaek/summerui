import { ReactNode } from 'react'

export interface PopoverProps {
  children: ReactNode | ReactNode[]
  container?: Element | null
  isOpen?: boolean
  onClose?: () => void
  pos?: 'center' | 'top-right'
}
