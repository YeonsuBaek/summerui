import Segmented from './Segmented'

export interface SegmentedProps {
  id: string
  options: string[]
  selectedOption: string
  onSelect: (item: string) => void
  size?: 'small' | 'medium' | 'large'
  width?: 'full' | 'flex'
  disabled?: boolean
}

export { Segmented }
