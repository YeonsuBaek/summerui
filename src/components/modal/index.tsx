import { ModalButton, ModalContent, ModalTitle, ModalWrapper, ModalFooter, ModalHeader } from './Modal'

export const Modal = Object.assign(ModalWrapper, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
  Title: ModalTitle,
  Button: ModalButton,
})
export type {
  ModalProps,
  ModalHeaderProps,
  ModalContentProps,
  ModalFooterProps,
  ModalTitleProps,
  ModalButtonProps,
} from './Modal.types'
