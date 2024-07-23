import type { Meta, Story } from '@storybook/react'
import { Modal, ModalContentProps } from '.'

const meta: Meta = {
  title: 'Components/Modal/ModalContent',
  component: Modal.Content,
  argTypes: {},
}

export default meta

export const ModalContent: Story<ModalContentProps> = (args) => {
  return <Modal.Content {...args}>본문 영역</Modal.Content>
}
