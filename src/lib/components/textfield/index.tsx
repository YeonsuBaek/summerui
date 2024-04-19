import { ChangeEvent, InputHTMLAttributes } from 'react'
import TextField from './TextField'
import PasswordTextField from './PasswordTextField'
import { FilledIconType } from '../icon/FilledIcons'
import { OutlinedIconType } from '../icon/OutlinedIcons'

export interface DefaultTextFieldProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  label?: string
  required?: boolean
  disabled?: boolean
  autoFocus?: boolean
  isError?: boolean
  helperText?: string
}

export interface TextFieldProps extends DefaultTextFieldProps, InputHTMLAttributes<HTMLInputElement> {
  suffix?: string
  icon?: FilledIconType | OutlinedIconType
  type?: 'text' | 'password' | 'file'
}

export { TextField, PasswordTextField }
