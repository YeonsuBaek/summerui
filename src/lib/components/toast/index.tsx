import { FilledIconType } from '../icon/FilledIcons'
import { OutlinedIconType } from '../icon/OutlinedIcons'
import Toast from './Toast'

export interface ToastProps {
  color?: 'success' | 'info' | 'warning' | 'error'
  hasIcon?: boolean
  icon?: FilledIconType | OutlinedIconType
}

export { Toast }
