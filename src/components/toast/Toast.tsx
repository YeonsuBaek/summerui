import { CheckCircleFilledIcon, InfoFilledIcon, WarningFilledIcon, XIcon } from '../../assets/icon'
import { Popover } from '../../utils/popover'
import { Button } from '../button'
import { ToastProps } from './Toast.types'

export const Toast = ({ children, isOpen, onClose, state = 'warning', hasCloseButton = true }: ToastProps) => {
  const StateIcon =
    state === 'warning' || state === 'error'
      ? WarningFilledIcon
      : state === 'success'
      ? CheckCircleFilledIcon
      : state === 'information'
      ? InfoFilledIcon
      : null

  return (
    <Popover isOpen={isOpen} onClose={onClose} pos="top-right">
      <div className="ui-toast">
        {StateIcon && <StateIcon size={20} className={state} aria-label={`${state} notification`} />}
        <div className="ui-toast-content" role="alert" aria-live="assertive">
          {children}
        </div>
        {hasCloseButton && (
          <Button styleType="icon" styleVariant="normal" size="small" onClick={onClose} aria-label="Close notification">
            <XIcon />
          </Button>
        )}
      </div>
    </Popover>
  )
}
