import type { Meta, Story } from '@storybook/react'
import { Modal, ModalHeaderProps } from '.'

const meta: Meta = {
  title: 'Components/Modal/ModalHeader',
  component: Modal.Header,
  argTypes: {},
}

export default meta

export const ModalHeader: Story<ModalHeaderProps> = (args) => {
  return <Modal.Header {...args}>헤더 영역</Modal.Header>
}

ModalHeader.args = {
  hasCloseButton: () => alert('closed!'),
}
