import { ButtonProps, ButtonStyle } from './Button.types'

export const Button = <Style extends ButtonStyle>({
  children,
  styleType,
  styleVariant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  StartIcon,
  EndIcon,
  onClick = () => {},
  ...props
}: ButtonProps<Style>) => {
  const hasStartIcon = StartIcon && styleType !== 'icon'
  const hasEndIcon = EndIcon && styleType !== 'icon'
  const startIconSize = size === 'small' ? 20 : 24
  const endIconSize = size === 'small' ? 20 : 24

  const buttonSize = styleVariant === 'normal' ? '' : size

  return (
    <button
      type={type}
      className={`ui-button ${styleType} ${styleVariant} ${buttonSize} ${props.className ? props.className : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {hasStartIcon && <StartIcon size={startIconSize} className="ui-button-icon start" aria-hidden />}
      {children}
      {hasEndIcon && <EndIcon size={endIconSize} className="ui-button-icon end" aria-hidden />}
    </button>
  )
}
