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
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextArea
          id="storybook-textarea-size-1-dark"
          value={val}
          onChange={setVal}
          size="small"
          label="Small Size"
          placeholder="Placeholder 플레이스홀더"
        />
        <TextArea
          id="storybook-textarea-size-2-dark"
          value={val}
          onChange={setVal}
          size="medium"
          label="Medium Size"
          placeholder="Placeholder 플레이스홀더"
        />
      </div>
    </>
  )
}

export const MaxLengthOfTextArea = () => {
  const [val, setVal] = useState('')

  return (
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextArea
          id="storybook-textarea-length-1-dark"
          value={val}
          onChange={setVal}
          label="Has Max Length only"
          placeholder="Placeholder 플레이스홀더"
          maxLength={20}
        />
        <TextArea
          id="storybook-textarea-length-2-dark"
          value={val}
          onChange={setVal}
          size="medium"
          label="Has Max Length and Message"
          placeholder="Placeholder 플레이스홀더"
          helperText="20자 이하 작성해주세요."
          maxLength={20}
        />
        <TextArea
          id="storybook-textarea-length-3-dark"
          value="이럴 수가... 20자를 넘겨버렸다!!!"
          size="medium"
          label="Has Max Length and Message"
          placeholder="Placeholder 플레이스홀더"
          helperText="20자 이하 작성해주세요."
          maxLength={20}
        />
      </div>
    </>
  )
}
export const TextAreaGuide = () => {
  return (
    <>
      <div style={{ padding: '16px' }}>
        <TextArea
          id="storybook-textarea-guide-1"
          value=""
          label="후기"
          placeholder="예) 즐겁게 관람했습니다."
          helperText="영화 관람 후기를 10자 이상 작성해주세요."
          maxLength={10}
        />
      </div>
      <div className="theme-dark" style={{ padding: '16px' }}>
        <TextArea
          id="storybook-textarea-guide-1-dark"
          value=""
          label="후기"
          placeholder="예) 즐겁게 관람했습니다."
          helperText="영화 관람 후기를 10자 이상 작성해주세요."
          maxLength={10}
        />
      </div>
    </>
  )
}
export const TextAreaWithoutLabel = () => {
  return (
    <>
      <div style={{ padding: '16px' }}>
        <TextArea
          id="storybook-textarea-label-1"
          value=""
          placeholder="Placeholder 플레이스홀더"
          helperText="label이 없는 입력창입니다."
          aria-label="TextArea without label"
        />
      </div>
      <div className="theme-dark" style={{ padding: '16px' }}>
        <TextArea
          id="storybook-textarea-label-1-dark"
          value=""
          placeholder="Placeholder 플레이스홀더"
          helperText="label이 없는 입력창입니다."
          aria-label="TextArea without label"
        />
      </div>
    </>
  )
}
