type StateType = 'warning' | 'error' | 'success' | 'information'

export interface ToastProps {
  isOpen: boolean
  onClose: () => void
  state?: StateType
  hasCloseButton?: boolean
}
