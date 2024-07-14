import { ComponentType } from 'react'
import { IconProps } from '../../assets/icon/icon.types'

type TextFieldSize = 'small' | 'medium' | 'large'

export interface TextFieldProps {
  id: string
  value: string
  onChange?: (val: string) => void
  size?: TextFieldSize
  type?: 'text' | 'email' | 'number' | 'password'
  placeholder?: string
  label?: string
  helperText?: string
  isError?: boolean
  errorText?: string
  autoFocus?: boolean
  readOnly?: boolean
  disabled?: boolean
}
