import type { Meta } from '@storybook/react'
import { TextField } from './TextField'
import { useState } from 'react'
import { SearchIcon } from '../../assets/icon'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
}

export default meta

export const TextFieldOfSizes = () => {
  const [text, setValue] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField
        id="storybook-size-1"
        value={text}
        onChange={setValue}
        size="small"
        label="Small Size"
        placeholder="Placeholder 플레이스홀더"
      />
      <TextField
        id="storybook-size-2"
        value={text}
        onChange={setValue}
        label="Medium Size"
        placeholder="Placeholder 플레이스홀더"
      />
      <TextField
        id="storybook-size-3"
        value={text}
        onChange={setValue}
        size="large"
        label="Large Size"
        placeholder="Placeholder 플레이스홀더"
      />
    </div>
  )
}
export const TextFieldOfTypes = () => {
  const [text, setValue] = useState('Text Text')
  const [password, setPassword] = useState('1234')
  const [email, setEmail] = useState('storybook@example.com')
  const [number, setNumber] = useState(12)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField
        id="storybook-type-1"
        value={text}
        onChange={setValue}
        label="Text Type"
        placeholder="Placeholder 플레이스홀더"
      />
      <TextField
        id="storybook-type-2"
        type="password"
        value={password}
        onChange={setPassword}
        label="Password Type"
        placeholder="Placeholder 플레이스홀더"
      />
      <TextField
        id="storybook-type-3"
        type="email"
        value={email}
        onChange={setEmail}
        label="Email Type"
        placeholder="Placeholder 플레이스홀더"
      />
      <TextField
        id="storybook-type-4"
        type="number"
        value={number}
        onChange={setNumber}
        label="Number Type"
        placeholder="Placeholder 플레이스홀더"
      />
    </div>
  )
}
export const RequiredTextField = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField id="storybook-required" required label="Required Text" placeholder="Placeholder 플레이스홀더" />
    </div>
  )
}
export const TextFieldWithMessage = () => {
  const [text, setValue] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField
        id="storybook-message-1"
        value={text}
        onChange={setValue}
        label="Message 없음"
        placeholder="Placeholder 플레이스홀더"
      />
      <TextField
        id="storybook-message-2"
        value={text}
        onChange={setValue}
        label="Helper 메세지 있음"
        placeholder="Placeholder 플레이스홀더"
        helperText="isError가 true이고 errorText가 있는 경우엔 비활성화"
      />
      <TextField
        id="storybook-message-3"
        value={text}
        onChange={setValue}
        label="Error 메세지 있음"
        placeholder="Placeholder 플레이스홀더"
        errorText="isError가 true인 경우에만 활성화"
        isError
      />
    </div>
  )
}
export const TextFieldGuide = () => {
  return (
    <TextField
      id="storybook-textfield-guide-1"
      value=""
      label="전화번호"
      placeholder="예) 010-1234-5678"
      aria-label="TextField without label"
      helperText="하이픈(-)을 반드시 입력해주세요."
    />
  )
}
export const TextFieldWithoutLabel = () => {
  return (
    <TextField
      id="storybook-textfield-label-1"
      value=""
      placeholder="Placeholder 플레이스홀더"
      aria-label="TextField without label"
    />
  )
}
export const TextFieldWithButton = () => {
  return (
    <>
      <TextField
        id="storybook-textfield-button-1"
        size="small"
        value=""
        placeholder="Placeholder 플레이스홀더"
        ButtonIcon={SearchIcon}
        onClickButton={() => alert("It's a small button")}
      />
      <br />
      <TextField
        id="storybook-textfield-button-2"
        value=""
        placeholder="Placeholder 플레이스홀더"
        ButtonIcon={SearchIcon}
        onClickButton={() => alert("It's a medium button")}
      />
      <br />
      <TextField
        id="storybook-textfield-button-3"
        size="large"
        value=""
        placeholder="Placeholder 플레이스홀더"
        ButtonIcon={SearchIcon}
        onClickButton={() => alert("It's a large button")}
      />
    </>
  )
}
