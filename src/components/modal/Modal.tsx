import { CheckCircleFilledIcon, InfoFilledIcon, WarningFilledIcon, XIcon } from '../../assets/icon'
import { Popover } from '../../utils/popover'
import { Button } from '../button'
import {
  ModalButtonProps,
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
  ModalTitleProps,
} from './Modal.types'

export const ModalWrapper = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Popover isOpen={isOpen} onClose={onClose} pos="center">
      <div className="ui-modal">{children}</div>
    </Popover>
  )
}

// Layout
export const ModalHeader = ({ children, hasCloseButton }: ModalHeaderProps) => {
  return (
    <div className="ui-modal-header">
      {children}
      {hasCloseButton && (
        <Button size="small" styleType="icon" styleVariant="normal" onClick={hasCloseButton}>
          <XIcon />
        </Button>
      )}
    </div>
  )
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return <div>{children}</div>
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="ui-modal-footer">{children}</div>
}

// Information
export const ModalTitle = ({ children, state }: ModalTitleProps) => {
  const StateIcon =
    state === 'warning' || state === 'error'
      ? WarningFilledIcon
      : state === 'success'
      ? CheckCircleFilledIcon
      : state === 'information'
      ? InfoFilledIcon
      : null
  return (
    <div className="ui-modal-title">
      {StateIcon && <StateIcon className={state} size={24} />}
      <h2>{children}</h2>
    </div>
  )
}

export const ModalButton = ({ type = 'cancel', onClick, children }: ModalButtonProps) => {
  const buttonStyleType = type === 'cancel' ? 'outlined' : 'filled'
  const buttonStyleVariant = type === 'cancel' ? 'tertiary' : 'primary'

  return (
    <Button size="large" styleType={buttonStyleType} styleVariant={buttonStyleVariant} onClick={onClick}>
      {children}
    </Button>
  )
}
