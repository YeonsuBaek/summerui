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
      <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {}

export const SuccessToast = () => {
  return <Toast isOpen={true} color="success" onClose={() => {}} />
}
export const InfoToast = () => {
  return <Toast isOpen={true} color="info" onClose={() => {}} />
}
export const ErrorToast = () => {
  return <Toast isOpen={true} color="error" onClose={() => {}} />
}
export const WarningToast = () => {
  return <Toast isOpen={true} color="warning" onClose={() => {}} />
}
