import type { ComponentStory, Meta } from '@storybook/react'
import { Segmented } from '.'

const meta: Meta<typeof Segmented> = {
  title: 'Component/Segmented',
  component: Segmented,
  argTypes: {},
}

export default meta

const InteractionTemplate: ComponentStory<typeof Segmented> = (args) => <Segmented {...args}></Segmented>

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {}
