import type { ComponentStory, Meta } from '@storybook/react'
import { RadioGroup, RadioOptionProps } from '.'
import { useState } from 'react'

const meta: Meta<typeof RadioGroup> = {
  title: 'Component/RadioGroup',
  component: RadioGroup,
  argTypes: {
    direction: ['vertical', 'horizontal'],
  },
}

export default meta

const InteractionTemplate: ComponentStory<typeof RadioGroup> = (args) => {
  enum values {
    daily = 'daily',
    weekly = 'weekly',
    monthly = 'monthly',
  }
  const OPTIONS: RadioOptionProps[] = [
    { value: values.daily, text: 'Daily', id: 'option1' },
    { value: values.weekly, text: 'Weekly', id: 'option2' },
    { value: values.monthly, text: 'Monthly', id: 'option3', disabled: true },
  ]
  const [selectedItem, setSelectedItem] = useState(values.daily)

  return (
    <RadioGroup
      {...args}
      id="story-radio-group-1"
      options={OPTIONS}
      selectedOption={selectedItem}
      onSelect={(val) => setSelectedItem(val as values)}
    />
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {}

enum values {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
  green = 'green',
}
const COMMON_OPTIONS: RadioOptionProps[] = [
  { value: values.red, text: 'Red', id: 'option1' },
  { value: values.blue, text: 'Blue', id: 'option2' },
  { value: values.yellow, text: 'Yellow', id: 'option3' },
  { value: values.green, text: 'Green', id: 'option4' },
]

export const VerticalRadioGroup = () => {
  return (
    <RadioGroup
      id="story-radio-group-2"
      options={COMMON_OPTIONS}
      selectedOption={COMMON_OPTIONS[0].value}
      onSelect={() => {}}
    />
  )
}

export const HorizontalRadioGroup = () => {
  return (
    <RadioGroup
      id="story-radio-group-3"
      options={COMMON_OPTIONS}
      selectedOption={COMMON_OPTIONS[0].value}
      onSelect={() => {}}
      direction="horizontal"
    />
  )
}

const DISABLED_OPTIONS: RadioOptionProps[] = [
  { value: values.red, text: 'Red', id: 'option1', disabled: true },
  { value: values.blue, text: 'Blue', id: 'option2', disabled: true },
  { value: values.yellow, text: 'Yellow', id: 'option3', disabled: true },
  { value: values.green, text: 'Green', id: 'option4', disabled: true },
]

export const DisabledRadioGroup = () => {
  return (
    <RadioGroup
      id="story-radio-group-4"
      options={DISABLED_OPTIONS}
      selectedOption={DISABLED_OPTIONS[0].value}
      onSelect={() => {}}
    />
  )
}
