import { HTMLAttributes, ReactNode } from 'react'

export type ButtonStyle = 'filled' | 'outlined' | 'ghost' | 'icon'

type ButtonFilledVariant = 'primary'
type ButtonOutlinedVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonGhostVariant = 'primary' | 'secondary'
type ButtonIconVariant = 'primary' | 'secondary' | 'filled' | 'outlined' | 'background'

type ButtonSize = 'small' | 'medium' | 'large'

type ButtonVariant<Style> = Style extends 'filled'
  ? ButtonFilledVariant
  : Style extends 'outlined'
  ? ButtonOutlinedVariant
  : Style extends 'ghost'
  ? ButtonGhostVariant
  : Style extends 'icon'
  ? ButtonIconVariant
  : never

export interface ButtonProps<Style extends ButtonStyle> extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  styleType: Style
  variant?: ButtonVariant<Style> | 'primary'
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
