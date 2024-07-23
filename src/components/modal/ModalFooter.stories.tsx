import type { Meta, Story } from '@storybook/react'
import { Modal, ModalFooterProps } from '.'

const meta: Meta = {
  title: 'Components/Modal/ModalFooter',
  component: Modal.Footer,
  argTypes: {},
}

export default meta

export const ModalFooter: Story<ModalFooterProps> = (args) => {
  return <Modal.Footer {...args}>푸터 영역</Modal.Footer>
}
