type DatePickerSize = 'small' | 'medium' | 'large'

type DatePickerFormat = 'YYYYMMDD' | 'YYYY/MM/DD' | 'YYYY.MM.DD' | 'YYYY-MM-DD' | 'YYMMDD'

export interface DatePickerProps {
  id: string
  value: string
  onChange?: (val: string) => void
  size?: DatePickerSize
  format?: DatePickerFormat
  autoFormatting?: boolean
  label?: string
  helperText?: string
  isError?: boolean
  errorText?: string
  autoFocus?: boolean
  readOnly?: boolean
  disabled?: boolean
}
