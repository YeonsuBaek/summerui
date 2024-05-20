import DatePicker from './DatePicker'

export interface DatePickerProps {
  id: string
  value: string
  setValue: (val: string) => void
  format?: 'YYYY/MM/DD' | 'YYYY-MM-DD'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export { DatePicker }
