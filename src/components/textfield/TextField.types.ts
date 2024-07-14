type TextFieldSize = 'small' | 'medium' | 'large'
export type TextFieldType = 'text' | 'email' | 'number' | 'password'
export type TextFieldValue<Type> = Type extends 'number' ? 'number' : 'string'

export interface TextFieldProps<Type extends TextFieldType> {
  id: string
  value: TextFieldValue<Type>
  onChange?: (val: TextFieldValue<Type> | string) => void
  type?: Type | 'text'
  size?: TextFieldSize
  placeholder?: string
  label?: string
  helperText?: string
  isError?: boolean
  errorText?: string
  autoFocus?: boolean
  readOnly?: boolean
  disabled?: boolean
}
