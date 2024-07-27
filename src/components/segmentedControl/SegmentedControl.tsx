import { Children, cloneElement, isValidElement, useMemo, useState } from 'react'
import { SegmentedControlButtonProps, SegmentedControlProps } from './SegmentedControl.types'

export const SegmentedControlWrapper = ({
  children,
  size = 'medium',
  defaultSelectedValue = '',
  resizing = 'hug',
}: SegmentedControlProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultSelectedValue)

  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { selectedValue, setSelectedValue } as SegmentedControlButtonProps)
    }
    return child
  })

  return (
    <div className={`ui-segmented-control ${size} ${resizing}`} style={{ background: 'gray' }}>
      {clonedChildren}
    </div>
  )
}

export const SegmentedControlButton = ({
  children,
  value,
  selectedValue,
  setSelectedValue,
  disabled = false,
}: SegmentedControlButtonProps) => {
  const isSelected = useMemo(() => selectedValue === value, [selectedValue, value])

  return (
    <button
      type="button"
      onClick={() => setSelectedValue && setSelectedValue(value)}
      style={{ backgroundColor: isSelected ? 'blue' : 'white' }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
