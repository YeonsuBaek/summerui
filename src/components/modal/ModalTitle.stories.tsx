import type { Meta, Story } from '@storybook/react'
import { Modal, ModalTitleProps } from '.'

const meta: Meta = {
  title: 'Components/Modal/ModalTitle',
  component: Modal.Title,
  argTypes: {
    state: [undefined, 'warning', 'error', 'success', 'information'],
  },
}

export default meta

export const ModalTitle: Story<ModalTitleProps> = (args) => {
  return <Modal.Title {...args}>타이틀입니다.</Modal.Title>
}

ModalTitle.args = {
  state: 'success',
}
