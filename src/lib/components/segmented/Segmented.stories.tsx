import type { ComponentStory, Meta } from '@storybook/react'
import { Segmented, SegmentedOptionProps } from '.'
import { useState } from 'react'

const meta: Meta<typeof Segmented> = {
  title: 'Component/Segmented',
  component: Segmented,
  argTypes: {
    size: ['small', 'medium', 'large'],
    width: ['full', 'flex'],
    disabled: [true, false],
  },
}

export default meta

const InteractionTemplate: ComponentStory<typeof Segmented> = (args) => {
  enum values {
    daily = 'daily',
    weekly = 'weekly',
    monthly = 'monthly',
  }
  const OPTIONS: SegmentedOptionProps[] = [
    { value: values.daily, text: 'Daily', id: 'option1' },
    { value: values.weekly, text: 'Weekly', id: 'option2' },
    { value: values.monthly, text: 'Monthly', id: 'option3' },
  ]
  const [selectedItem, setSelectedItem] = useState(values.daily)

  return (
    <Segmented
      {...args}
      id="story-segmented-1"
      options={OPTIONS}
      selectedOption={selectedItem}
      onSelect={(val) => setSelectedItem(val as values)}
    />
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  disabled: false,
}

enum values {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
  green = 'green',
}
const COMMON_OPTIONS: SegmentedOptionProps[] = [
  { value: values.red, text: 'Red', id: 'option1' },
  { value: values.blue, text: 'Blue', id: 'option2' },
  { value: values.yellow, text: 'Yellow', id: 'option3' },
  { value: values.green, text: 'Green', id: 'option4' },
]
export const FullSegmented = () => {
  return (
    <div style={{ width: '400px' }}>
      <Segmented
        id="story-segmented-2"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="small"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-3"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="small"
        disabled
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-4"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-5"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        disabled
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-6"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="large"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-7"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="large"
        disabled
      />
    </div>
  )
}

export const FlexSegmented = () => {
  return (
    <div style={{ width: '400px' }}>
      <Segmented
        id="story-segmented-8"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="small"
        width="flex"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-9"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="small"
        width="flex"
        disabled
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-10"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        width="flex"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-11"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        width="flex"
        disabled
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-12"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="large"
        width="flex"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-13"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0].value}
        onSelect={() => {}}
        size="large"
        width="flex"
        disabled
      />
    </div>
  )
}
