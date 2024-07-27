import type { Meta, Story } from '@storybook/react'
import { Toast, ToastProps } from '.'
import { useState } from 'react'
import { Button } from '../button'

const meta: Meta = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    state: [undefined, 'warning', 'error', 'success', 'information'],
  },
}

export default meta

export const ToastExample: Story<ToastProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button styleType="filled" onClick={() => setIsOpen((prev) => !prev)}>
        Toast Open
      </Button>
      <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        사용자 행동에 대한 결과를 전달할 때 사용한다. 사용자 행동에 대한 결과를 전달할 때 사용한다. 사용자 행동에 대한
        결과를 전달할 때 사용한다.
      </Toast>
    </>
  )
}
