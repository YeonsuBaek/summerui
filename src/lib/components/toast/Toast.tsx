import { useMemo } from 'react'
import { ToastProps } from '.'
import { Icon } from '../icon'
import { Portal } from '../portal'

const Toast = ({ color = 'success', hasIcon = true, icon }: ToastProps) => {
  const toastIcon = useMemo(() => {
    if (icon) return icon
    else {
      if (color === 'info') return 'InfoCircle'
      if (color === 'warning') return 'ExclamationCircle'
      if (color === 'error') return 'CloseCircle'
      return 'CheckCircle'
    }
  }, [icon, color])

  return (
    <Portal>
      <div className={`ui-toast ${color}`}>
        {hasIcon && <Icon icon={toastIcon} size="small" className="ui-toast-icon" />}
        <p className="ui-toast-message">Success Toast</p>
      </div>
    </Portal>
  )
}

export default Toast
