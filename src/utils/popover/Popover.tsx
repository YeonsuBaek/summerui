import { Portal } from '../portal'
import { PopoverProps } from './Popover.types'
import { useState, useRef, useEffect, useCallback } from 'react'

export const Popover = ({ children, container, isOpen = false }: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [posY, setPosY] = useState(-9999)

  const getPlacement = useCallback(() => {
    if (!container || !popoverRef?.current) return -9999
    const gap = 4
    const popoverInfo = popoverRef.current.getBoundingClientRect()
    const containerInfo = container.getBoundingClientRect()
    const { innerHeight: windowHeight } = window
    let yPos = containerInfo.height + gap
    const yTotalHeight = yPos + popoverInfo.height + containerInfo.y
    const totalExceedsWindowHeight = yTotalHeight > windowHeight
    const canFitAbove = popoverInfo.height < containerInfo.y
    if (totalExceedsWindowHeight && canFitAbove) {
      yPos = -popoverInfo.height - gap
    }

    return yPos
  }, [container, popoverRef])

  const handlePosition = useCallback(() => {
    if (isOpen && container) {
      const offset = getPlacement()
      setPosY(offset)
    }
  }, [isOpen, container, getPlacement])

  useEffect(() => {
    if (isOpen && container) {
      const offset = getPlacement()
      setPosY(offset)
    }
  }, [isOpen, container])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handlePosition)
    }
    return () => {
      window.removeEventListener('scroll', handlePosition)
    }
  }, [isOpen, handlePosition])

  return isOpen ? (
    <Portal container={container}>
      <div className="ui-popover" ref={popoverRef} style={{ top: `${posY / 16}rem` }}>
        {children}
      </div>
    </Portal>
  ) : null
}
