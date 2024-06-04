import type { ComponentStory, Meta } from '@storybook/react'
import { Checkbox, CheckboxItemType } from '.'
import { ChangeEvent, useState } from 'react'

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
      onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
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

export const CheckboxGroup = () => {
  enum values {
    red = 'red',
    blue = 'blue',
    yellow = 'yellow',
    green = 'green',
  }
  const COMMON_OPTIONS: CheckboxItemType[] = [
    { value: values.red, text: 'Red', id: 'option1' },
    { value: values.blue, text: 'Blue', id: 'option2' },
    { value: values.yellow, text: 'Yellow', id: 'option3' },
    { value: values.green, text: 'Green', id: 'option4', disabled: true },
  ]

  const [checkedOptions, setCheckedOptions] = useState(
    COMMON_OPTIONS.reduce((acc, option) => {
      acc[option.value] = false
      return acc
    }, {} as { [key: string]: boolean })
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newSelectedOptions = {
      ...checkedOptions,
      [value]: !checkedOptions[value],
    }
    setCheckedOptions(newSelectedOptions)
  }

  return (
    <>
      <Checkbox.Group
        options={COMMON_OPTIONS}
        checkedOptions={checkedOptions}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <br />
      <br />
      <Checkbox.Group
        options={COMMON_OPTIONS}
        checkedOptions={checkedOptions}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        wrap
      />
    </>
  )
}
