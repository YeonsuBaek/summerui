import { useEffect, useMemo } from 'react'
import { ToastProps } from '.'
import { Icon } from '../icon'
import { Portal } from '../portal'
import { IconButton } from '../button'

const Toast = ({
  isOpen,
  duration = 5000,
  onClose,
  color = 'success',
  hasIcon = true,
  icon,
  hasCloseButton = false,
}: ToastProps) => {
  const toastIcon = useMemo(() => {
    if (icon) return icon
    else {
      if (color === 'info') return 'InfoCircle'
      if (color === 'warning') return 'ExclamationCircle'
      if (color === 'error') return 'CloseCircle'
      return 'CheckCircle'
    }
  }, [icon, color])

  useEffect(() => {
    let timeout: number

    if (isOpen && duration > 0 && onClose) {
      timeout = window.setTimeout(() => {
        onClose()
      }, duration)
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout)
      }
    }
  }, [isOpen, duration, onClose])

  return (
    <Portal>
      <div className={`ui-toast ${color} ${isOpen ? 'open' : ''}`}>
        <div className="ui-toast-contents">
          {hasIcon && <Icon icon={toastIcon} size="small" className="ui-toast-icon" />}
          <p className="ui-toast-message">Success Toast</p>
        </div>
        {hasCloseButton && <IconButton icon="Close" size="small" onClick={() => onClose && onClose()} />}
      </div>
    </Portal>
  )
}

export default Toast
