import type { ComponentStory, Meta } from '@storybook/react'
import { Segmented } from '.'
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
  const OPTIONS = ['Daily', 'Weekly', 'Monthly']
  const [selectedItem, setSelectedItem] = useState(OPTIONS[0])

  return (
    <Segmented
      {...args}
      id="story-segmented-1"
      options={OPTIONS}
      selectedOption={selectedItem}
      onSelect={setSelectedItem}
    />
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  disabled: false,
}

const COMMON_OPTIONS = ['Red', 'Blue', 'Yellow', 'Green']
export const FullSegmented = () => {
  return (
    <div style={{ width: '400px' }}>
      <Segmented
        id="story-segmented-2"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        size="small"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-3"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        size="small"
        disabled
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-4"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-5"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        disabled
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-6"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        size="large"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-7"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
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
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        size="small"
        width="flex"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-9"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
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
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        width="flex"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-11"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        width="flex"
        disabled
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-12"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        size="large"
        width="flex"
      />
      <br />
      <br />
      <Segmented
        id="story-segmented-13"
        options={COMMON_OPTIONS}
        selectedOption={COMMON_OPTIONS[0]}
        onSelect={() => {}}
        size="large"
        width="flex"
        disabled
      />
    </div>
  )
}
