import { ReactNode } from 'react'

type StateType = 'warning' | 'error' | 'success' | 'information'

export interface ToastProps {
  children: ReactNode | ReactNode[]
  isOpen: boolean
  onClose: () => void
  state?: StateType
  hasCloseButton?: boolean
  duration?: number
}
