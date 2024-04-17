import { ChangeEvent } from 'react'
import DatePicker from './DatePicker'

export interface DatePickerProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  format?: 'YYYY/MM/DD' | 'YYYY-MM-DD'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export { DatePicker }
