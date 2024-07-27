import { Children, cloneElement, isValidElement, useMemo } from 'react'
import { SegmentedControlButtonProps, SegmentedControlProps } from './SegmentedControl.types'

export const SegmentedControlWrapper = ({
  children,
  size = 'medium',
  selectedValue = '',
  onChange = () => {},
  resizing = 'hug',
}: SegmentedControlProps) => {
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { selectedValue, onChange } as SegmentedControlButtonProps)
    }
    return child
  })

  return <div className={`ui-segmented-control ${size} ${resizing}`}>{clonedChildren}</div>
}

export const SegmentedControlButton = ({
  children,
  value,
  selectedValue,
  onChange,
  disabled = false,
}: SegmentedControlButtonProps) => {
  const isSelected = useMemo(() => selectedValue === value, [selectedValue, value])

  return (
    <button
      type="button"
      className={`ui-segmented-control-button ${isSelected ? 'isSelected' : ''}`}
      onClick={() => onChange && onChange(value)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
