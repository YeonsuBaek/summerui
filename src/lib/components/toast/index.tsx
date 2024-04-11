import { FilledIconType } from '../icon/FilledIcons'
import { OutlinedIconType } from '../icon/OutlinedIcons'
import Toast from './Toast'

export interface ToastProps {
  isOpen: boolean
  duration?: number
  onClose?: () => void
  color?: 'success' | 'info' | 'warning' | 'error'
  hasIcon?: boolean
  icon?: FilledIconType | OutlinedIconType
  hasCloseButton?: boolean
}

export { Toast }
