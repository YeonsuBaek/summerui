import type { ComponentStory, Meta } from '@storybook/react'
import { Checkbox } from '.'
import { useState } from 'react'

const meta: Meta<typeof Checkbox> = {
  title: 'Component/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: [true, false],
  },
}

export default meta

const InteractionTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      {...args}
      id="story-checkbox-1"
      value="example"
      text="Example"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  disabled: false,
}

export const DefaultCheckbox = () => {
  return (
    <>
      <Checkbox id="story-checkbox-2" value="example" text="Example" checked={false} onChange={() => {}} />
      <br />
      <Checkbox id="story-checkbox-3" value="example" text="Example" checked={true} onChange={() => {}} />
      <br />
      <Checkbox id="story-checkbox-2" value="example" text="Example" checked={false} onChange={() => {}} disabled />
      <br />
      <Checkbox id="story-checkbox-3" value="example" text="Example" checked={true} onChange={() => {}} disabled />
    </>
  )
}
