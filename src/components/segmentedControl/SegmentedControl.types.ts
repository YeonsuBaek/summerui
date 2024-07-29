import { ReactNode } from 'react'

type SegmentedControlSize = 'small' | 'medium' | 'large'

export interface SegmentedControlProps {
  children: ReactNode | ReactNode[]
  selectedValue?: string
  onChange?: (val: string) => void
  size?: SegmentedControlSize
  resizing?: 'hug' | 'fill'
}

export interface SegmentedControlButtonProps {
  children: ReactNode | ReactNode[]
  value: string
  selectedValue?: string
  onChange?: React.Dispatch<React.SetStateAction<string>>
  disabled?: boolean
}
