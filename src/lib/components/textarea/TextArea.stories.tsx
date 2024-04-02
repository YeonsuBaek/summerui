import type { ComponentStory, Meta } from '@storybook/react'
import { useState } from 'react'
import TextArea from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Component/TextArea',
  component: TextArea,
  argTypes: {
    resize: [true, false],
    disabled: [true, false],
  },
}

export default meta

const TextAreaTemplate: ComponentStory<typeof TextArea> = (args) => {
  const [text, setText] = useState<string>('')

  return (
    <div style={{ width: '400px' }}>
      <TextArea {...args} value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export const Interactive = TextAreaTemplate.bind({})
Interactive.args = {
  placeholder: 'example',
}

export const DefaultTextArea = () => {
  return (
    <div style={{ width: '400px' }}>
      <TextArea id="storybook-textarea-1" value="" onChange={() => {}} />
      <br />
      <TextArea id="storybook-textarea-2" value="" onChange={() => {}} disabled />
      <br />
      <TextArea id="storybook-textarea-3" value="" onChange={() => {}} placeholder="placeholder" />
      <br />
      <TextArea id="storybook-textarea-4" value="" onChange={() => {}} placeholder="placeholder" disabled />
      <br />
      <TextArea id="storybook-textarea-5" value="example" onChange={() => {}} />
      <br />
      <TextArea id="storybook-textarea-6" value="example" onChange={() => {}} disabled />
    </div>
  )
}

export const TextAreaWithLabel = () => {
  return (
    <div style={{ width: '400px' }}>
      <TextArea id="storybook-textarea-7" value="" onChange={() => {}} label="Label" />
      <br />
      <TextArea id="storybook-textarea-8" value="" onChange={() => {}} label="Label" placeholder="placeholder" />
      <br />
      <TextArea
        id="storybook-textarea-9"
        value={`value value \nvalue\nvalue\nvalue`}
        onChange={() => {}}
        label="Label"
      />
    </div>
  )
}

export const TextAreaWithCount = () => {
  return (
    <div style={{ width: '400px' }}>
      <TextArea id="storybook-textarea-9" value="Hello, World!" onChange={() => {}} maxText={20} />
      <br />
      <TextArea id="storybook-textarea-10" value="Hello, World!!!!!!!!!" onChange={() => {}} maxText={20} />
    </div>
  )
}
