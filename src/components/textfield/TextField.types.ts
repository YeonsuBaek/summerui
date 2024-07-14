type TextFieldSize = 'small' | 'medium' | 'large'
export type TextFieldType = 'text' | 'email' | 'number' | 'password'
export type TextFieldValue<Type> = Type extends 'number' ? 'number' : 'string'

export interface TextFieldProps<Type extends TextFieldType> {
  id: string
  type: Type | 'text'
  value: TextFieldValue<Type>
  onChange?: (val: TextFieldValue<Type> | string) => void
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
