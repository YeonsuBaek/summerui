import { HTMLAttributes, ReactNode } from 'react'

type TextFieldSize = 'small' | 'medium' | 'large'
export type TextFieldType = 'text' | 'email' | 'number' | 'password'
export type TextFieldValue<Type extends TextFieldType> = Type extends 'number' ? number : string

export interface TextFieldProps<Type extends TextFieldType> extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  id: string
  value?: TextFieldValue<Type>
  onChange?: (val: TextFieldValue<Type>) => void
  type?: Type
  size?: TextFieldSize
  placeholder?: string
  label?: string
  helperText?: string
  isError?: boolean
  errorText?: string
  autoFocus?: boolean
  readOnly?: boolean
  disabled?: boolean
  children?: ReactNode | ReactNode[]
}
