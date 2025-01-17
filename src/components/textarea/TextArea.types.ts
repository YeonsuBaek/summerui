import { HTMLAttributes } from 'react'

type TextAreaSize = 'small' | 'medium'

export interface TextAreaProps extends Omit<HTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  id: string
  value?: string
  onChange?: (val: string) => void
  size?: TextAreaSize
  placeholder?: string
  label?: string
  maxLength?: number
  rows?: number
  helperText?: string
  errorText?: string
  error?: boolean
  autoFocus?: boolean
  readOnly?: boolean
  disabled?: boolean
}
