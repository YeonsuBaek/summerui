import { ReactNode } from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode | ReactNode[]
  hasBackdrop?: boolean
  closeOnBackdropClick?: boolean
}

export interface ModalHeaderProps {
  children?: ReactNode | ReactNode[]
  hasCloseButton?: () => void
}

export interface ModalContentProps {
  children?: ReactNode | ReactNode[]
}

export interface ModalFooterProps {
  children?: ReactNode | ReactNode[]
}

export interface ModalTitleProps {
  state?: 'warning' | 'error' | 'success' | 'information'
  children?: string
}

export interface ModalButtonProps {
  type?: 'cancel' | 'ok'
  onClick?: () => void
  children?: ReactNode | ReactNode[]
}
