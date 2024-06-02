import { ReactElement } from 'react'
import Segmented from './Segmented'

export interface SegmentedOptionProps {
  value: string
  text?: string | ReactElement
  id?: string
}

export interface SegmentedProps {
  id: string
  options: SegmentedOptionProps[]
  selectedOption: string
  onSelect: (item: string) => void
  size?: 'small' | 'medium' | 'large'
  width?: 'full' | 'flex'
  disabled?: boolean
}

export { Segmented }
