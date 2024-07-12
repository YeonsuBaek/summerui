import { ButtonProps, ButtonStyle } from './Button.types'

export const Button = <Style extends ButtonStyle>({
  children,
  styleType,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  StartIcon,
  EndIcon,
  ...props
}: ButtonProps<Style>) => {
  const hasStartIcon = StartIcon && styleType !== 'icon'
  const hasEndIcon = EndIcon && styleType !== 'icon'
  const startIconSize = size === 'small' ? 20 : 24
  const endIconSize = size === 'small' ? 20 : 24

  return (
    <button
      type={type}
      className={`ui-button ${styleType} ${variant} ${size} ${props.className}`}
      disabled={disabled}
      {...props}
    >
      {hasStartIcon && <StartIcon size={startIconSize} className="ui-button-icon start" />}
      {children}
      {hasEndIcon && <EndIcon size={endIconSize} className="ui-button-icon end" />}
    </button>
  )
}
