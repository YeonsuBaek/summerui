import type { ComponentStory, Meta } from '@storybook/react'
import { Toast } from '.'
import { Button } from '../button'
import { useState } from 'react'

const meta: Meta<typeof Toast> = {
  title: 'Component/Toast',
  component: Toast,
  argTypes: {
    color: ['success', 'info', 'warning', 'error'],
    hasIcon: [true, false],
  },
}
export default meta

const InteractionTemplate: ComponentStory<typeof Toast> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Toast</Button>
      <Toast {...args} isOpen={isOpen} />
    </>
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {}
