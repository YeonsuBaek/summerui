import type { Meta } from '@storybook/react'
import { Portal } from './Portal'
import { useState, useRef } from 'react'
import { Button } from '../../components/button'

const meta: Meta<typeof Portal> = {
  title: 'Utils/Portal',
  component: Portal,
}

export default meta

export const Example = () => {
  const containerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div ref={containerRef}>포탈이 보여지는 곳: </div>
      <Button
        styleType="outlined"
        styleVariant={isOpen ? 'primary' : 'tertiary'}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Portal {isOpen ? 'On' : 'Off'}
      </Button>
      {isOpen && <Portal container={containerRef.current}>Portal</Portal>}
    </div>
  )
}
