import type { Meta } from '@storybook/react'
import { TextArea } from './TextArea'
import { useState } from 'react'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
}

export default meta

export const SizesOfTextArea = () => {
  const [val, setVal] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextArea
        id="storybook-textarea-size-1"
        value={val}
        onChange={setVal}
        size="small"
        label="Small Size"
        placeholder="Placeholder 플레이스홀더"
      />
      <TextArea
        id="storybook-textarea-size-2"
        value={val}
        onChange={setVal}
        size="medium"
        label="Medium Size"
        placeholder="Placeholder 플레이스홀더"
      />
    </div>
  )
}

export const MaxLengthOfTextArea = () => {
  const [val, setVal] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextArea
        id="storybook-textarea-length-1"
        value={val}
        onChange={setVal}
        label="Has Max Length only"
        placeholder="Placeholder 플레이스홀더"
        maxLength={20}
      />
      <TextArea
        id="storybook-textarea-size-2"
        value={val}
        onChange={setVal}
        size="medium"
        label="Has Max Length and Message"
        placeholder="Placeholder 플레이스홀더"
        helperText="20자 이하 작성해주세요."
        maxLength={20}
      />
      <TextArea
        id="storybook-textarea-size-3"
        value="이럴 수가... 20자를 넘겨버렸다!!!"
        size="medium"
        label="Has Max Length and Message"
        placeholder="Placeholder 플레이스홀더"
        helperText="20자 이하 작성해주세요."
        maxLength={20}
      />
    </div>
  )
}
