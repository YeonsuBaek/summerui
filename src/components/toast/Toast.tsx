import { CheckCircleFilledIcon, InfoFilledIcon, WarningFilledIcon, XIcon } from '../../assets/icon'
import { Popover } from '../../utils/popover'
import { Button } from '../button'
import { ToastProps } from './Toast.types'

export const Toast = ({ isOpen, onClose, state = 'warning', hasCloseButton = true }: ToastProps) => {
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
        {StateIcon && <StateIcon size={20} className={state} />}
        <div className="ui-toast-content">
          토스트 알람 입니다. 토스트 알람 입니다. 토스트 알람 입니다. 토스트 알람 입니다. 토스트 알람 입니다. 토스트
          알람 입니다. 토스트 알람 입니다. 토스트 알람 입니다. 토스트 알람 입니다. 토스트 알람 입니다.
        </div>
        {hasCloseButton && (
          <Button styleType="icon" styleVariant="secondary" size="small" onClick={onClose}>
            <XIcon />
          </Button>
        )}
      </div>
    </Popover>
  )
}
