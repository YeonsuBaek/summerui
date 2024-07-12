import { ButtonProps, ButtonStyle } from './Button.types'

export const Button = <Style extends ButtonStyle>({
  children,
  styleType,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps<Style>) => {
  return (
    <button
      type={type}
      className={`ui-button ${styleType} ${variant} ${size} ${props.className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
