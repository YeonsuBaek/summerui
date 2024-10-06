import { ComponentType, HTMLAttributes, ReactNode } from 'react'
import { IconProps } from '../../assets/icon/icon.types'

export type ButtonStyle = 'filled' | 'outlined' | 'ghost' | 'icon'

type ButtonFilledVariant = 'primary'
type ButtonOutlinedVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonGhostVariant = 'primary' | 'secondary'
type ButtonIconVariant = 'normal' | 'primary' | 'secondary' | 'filled' | 'outlined'

type ButtonSize = 'small' | 'medium' | 'large'

type ButtonStyleVariant<Style> = Style extends 'filled'
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
  styleVariant?: ButtonStyleVariant<Style> | 'primary'
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  StartIcon?: ComponentType<IconProps>
  EndIcon?: ComponentType<IconProps>
  onClick?: () => void
  color?: 'default' | 'danger' | 'warning' | 'success' | 'information'
}
