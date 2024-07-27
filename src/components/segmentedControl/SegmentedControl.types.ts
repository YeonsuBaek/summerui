import { ReactNode } from 'react'

type SegmentedControlSize = 'small' | 'medium' | 'large'

export interface SegmentedControlProps {
  children: ReactNode | ReactNode[]
  size?: SegmentedControlSize
  defaultSelectedValue?: string
  resizing?: 'hug' | 'fill'
}

export interface SegmentedControlButtonProps {
  children: ReactNode | ReactNode[]
  value: string
  selectedValue?: string
  setSelectedValue?: React.Dispatch<React.SetStateAction<string>>
  disabled?: boolean
}
