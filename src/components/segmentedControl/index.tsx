import { SegmentedControlWrapper, SegmentedControlButton } from './SegmentedControl'
export type { SegmentedControlProps, SegmentedControlButtonProps } from './SegmentedControl.types'

export const SegmentedControl = Object.assign(SegmentedControlWrapper, {
  Button: SegmentedControlButton,
})
