import { Portal } from '../portal'
import { PopoverProps } from './Popover.types'
import { useState, useRef, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'

export const Popover = ({ children, container, isOpen = false, onClose = () => {} }: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [posY, setPosY] = useState(-9999)

  const getPositionY = useCallback(() => {
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

  const handlePosition = useCallback(
    debounce(() => {
      if (isOpen && container) {
        const offsetY = getPositionY()
        setPosY(offsetY)
      }
    }, 50),
    [isOpen, container, getPositionY]
  )

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen && container) {
      const offsetY = getPositionY()
      setPosY(offsetY)
    }
  }, [isOpen, container])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handlePosition)
    }
    return () => {
      window.removeEventListener('scroll', handlePosition)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return isOpen ? (
    <Portal container={container}>
      <div className="ui-popover" ref={popoverRef} style={{ top: `${posY / 16}rem` }} aria-hidden={!isOpen}>
        {children}
      </div>
    </Portal>
  ) : null
}
