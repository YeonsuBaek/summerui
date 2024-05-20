import type { ComponentStory, Meta } from '@storybook/react'
import { Checkbox } from '.'
import { useState } from 'react'

const meta: Meta<typeof Checkbox> = {
  title: 'Component/Checkbox',
  component: Checkbox,
  argTypes: {
    wrap: [true, false],
    disabled: [true, false],
  },
}

export default meta

const InteractionTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const OPTIONS = ['Apple', 'Pear', 'Orange', 'Strawberry']
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((item) => item !== option))
    } else {
      setSelectedOptions((prev) => [...prev, option])
    }
  }

  return (
    <Checkbox
      {...args}
      id="story-checkbox-1"
      options={OPTIONS}
      selectedOptions={selectedOptions}
      onSelect={handleSelect}
    />
  )
}

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  disabled: false,
}

const COMMON_OPTIONS = ['option1', 'option2', 'option3']

export const NoWrapCheckbox = () => {
  return (
    <div>
      <Checkbox
        id="story-checkbox-2"
        options={COMMON_OPTIONS}
        selectedOptions={[COMMON_OPTIONS[0]]}
        onSelect={() => {}}
      />
      <br />
      <br />
      <Checkbox
        id="story-checkbox-3"
        options={COMMON_OPTIONS}
        selectedOptions={[COMMON_OPTIONS[0]]}
        onSelect={() => {}}
        disabled
      />
    </div>
  )
}

export const WrapCheckbox = () => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Checkbox
        id="story-checkbox-4"
        options={COMMON_OPTIONS}
        selectedOptions={[COMMON_OPTIONS[0]]}
        onSelect={() => {}}
        wrap
      />
      <br />
      <br />
      <Checkbox
        id="story-checkbox-5"
        options={COMMON_OPTIONS}
        selectedOptions={[COMMON_OPTIONS[0]]}
        onSelect={() => {}}
        wrap
        disabled
      />
    </div>
  )
}
