import TextArea from './TextArea'
import { ChangeEvent } from 'react'

export interface TextAreaProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  label?: string
  required?: boolean
  disabled?: boolean
  autoFocus?: boolean
  isError?: boolean
  helperText?: string
  cols?: number
  resize?: boolean
  maxText?: number
}

export { TextArea }
