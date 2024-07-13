import { ComponentType, HTMLAttributes, ReactNode } from 'react'
import { IconProps } from '../../assets/icon/icon.types'

export type ButtonStyle = 'filled' | 'outlined' | 'ghost' | 'icon'

type ButtonFilledVariant = 'primary'
type ButtonOutlinedVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonGhostVariant = 'primary' | 'secondary'
type ButtonIconVariant = 'primary' | 'secondary' | 'filled' | 'outlined'

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
  StartIcon?: ComponentType<IconProps>
  EndIcon?: ComponentType<IconProps>
  onClick?: () => void
}
