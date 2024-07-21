import type { Meta } from '@storybook/react'
import { Popover } from './Popover'
import { useState, useRef } from 'react'
import { Button } from '../../components/button'

const meta: Meta<typeof Popover> = {
  title: 'Utils/Popover',
  component: Popover,
}

export default meta

export const Example = () => {
  const divRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={{ display: 'flex', position: 'relative' }} ref={divRef}>
      <Button styleType="outlined" onClick={() => setIsOpen((prev) => !prev)}>
        Popover On
      </Button>
      <Popover container={divRef.current} isOpen={isOpen}>
        Popover
      </Popover>
    </div>
  )
}
