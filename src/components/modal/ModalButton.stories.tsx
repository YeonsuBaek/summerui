import type { Meta, Story } from '@storybook/react'
import { Modal, ModalButtonProps } from '.'

const meta: Meta = {
  title: 'Components/Modal/ModalButton',
  component: Modal.Button,
  argTypes: {
    type: ['cancel', 'ok'],
  },
}

export default meta

export const ModalButton: Story<ModalButtonProps> = (args) => {
  return <Modal.Button {...args}>버튼</Modal.Button>
}

ModalButton.args = {
  type: 'cancel',
  onClick: () => alert('clicked!'),
}
