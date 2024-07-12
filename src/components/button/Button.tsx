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
  return (
    <button
      type={type}
      className={`ui-button ${styleType} ${variant} ${size} ${props.className}`}
      disabled={disabled}
      {...props}
    >
      {StartIcon && <StartIcon size={size === 'small' ? 20 : 24} className="ui-button-icon start" />}
      {children}
      {EndIcon && <EndIcon size={size === 'small' ? 20 : 24} className="ui-button-icon end" />}
    </button>
  )
}
