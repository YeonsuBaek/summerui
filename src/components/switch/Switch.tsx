import { CircleFilledIcon } from '../../assets/icon'
import { SwitchProps } from './Switch.types'

export const Switch = ({
  id,
  children,
  size = 'medium',
  checked = false,
  onChecked = () => {},
  disabled = false,
}: SwitchProps) => {
  const iconSize = size === 'small' ? 16 : size === 'medium' ? 20 : 24

  return (
    <div className={`ui-switch ${size}`}>
      <button
        id={id}
        className={`ui-switch-button ${checked ? 'switch-on' : 'switch-off'}`}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        onClick={() => onChecked(!checked)}
        disabled={disabled}
      >
        <CircleFilledIcon size={iconSize} />
      </button>
      {children && (
        <label className="ui-switch-label" htmlFor={id} aria-disabled={disabled}>
          {children}
        </label>
      )}
    </div>
  )
}
