import { ChangeEvent, InputHTMLAttributes } from 'react'
import { TextField as DefaultTextfield } from './TextField'
import PasswordTextField from './PasswordTextField'
import { FilledIconType } from '../icon/FilledIcons'
import { OutlinedIconType } from '../icon/OutlinedIcons'
import SearchTextField from './SearchTextField'

export interface DefaultTextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

export interface TextFieldProps extends DefaultTextFieldProps {
  suffix?: string
  icon?: FilledIconType | OutlinedIconType
  type?: 'text' | 'password' | 'file'
}

export interface SearchTextFieldProps extends DefaultTextFieldProps {
  onSearch?: () => void
}

export const TextField = Object.assign(DefaultTextfield, {
  Password: PasswordTextField,
  Search: SearchTextField,
})
