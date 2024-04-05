import type { ComponentStory, Meta } from '@storybook/react'
import { Toast } from '.'

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
  return (
    <>
      <Toast {...args} />
    </>
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {}
