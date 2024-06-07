import type { ComponentStory, Meta } from '@storybook/react'
import { TextField } from '.'
import { useState } from 'react'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof TextField> = {
  title: 'Component/TextField',
  component: TextField,
  argTypes: {
    size: ['small', 'medium', 'large'],
    disabled: [true, false],
  },
}

export default meta

const TextFieldTemplate: ComponentStory<typeof TextField> = (args) => {
  const [text, setText] = useState('')
  const [pwText, setPwText] = useState('')
  const [searchText, setSearchText] = useState('')

  return (
    <div style={{ width: '300px' }}>
      <TextField {...args} id="storybook-textfield-example" value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <br />
      <TextField.Password
        {...args}
        id="storybook-textfield-password-example"
        value={pwText}
        onChange={(e) => setPwText(e.target.value)}
      />
      <br />
      <br />
      <TextField.Search
        id="storybook-textfield-search-example"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSearch={action(`search ${searchText}`)}
      />
    </div>
  )
}

export const Interactive = TextFieldTemplate.bind({})
Interactive.args = {
  placeholder: 'example',
  size: 'medium',
}

export const DefaultTextField = () => {
  return (
    <div style={{ width: '300px' }}>
      <TextField id="storybook-textfield-1" value="" onChange={() => {}} />
      <br />
      <br />
      <TextField id="storybook-textfield-2" value="" onChange={() => {}} disabled />
      <br />
      <br />
      <TextField id="storybook-textfield-3" value="" onChange={() => {}} placeholder="placeholder" />
      <br />
      <br />
      <TextField id="storybook-textfield-4" value="" onChange={() => {}} placeholder="placeholder" disabled />
      <br />
      <br />
      <TextField id="storybook-textfield-5" value="example" onChange={() => {}} />
      <br />
      <br />
      <TextField id="storybook-textfield-6" value="example" onChange={() => {}} disabled />
    </div>
  )
}

export const TextFieldWithSuffix = () => {
  return (
    <div style={{ width: '300px' }}>
      <TextField
        id="storybook-textfield-suffix-1"
        value=""
        onChange={() => {}}
        placeholder="Enter a size"
        suffix="px"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-suffix-2"
        value="100"
        onChange={() => {}}
        placeholder="Enter a size"
        suffix="px"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-suffix-3"
        value="100"
        onChange={() => {}}
        placeholder="Enter a size"
        suffix="px"
        disabled
      />
    </div>
  )
}

export const TextFieldWithIcon = () => {
  return (
    <div style={{ width: '300px' }}>
      <TextField
        id="storybook-textfield-icon-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your email"
        icon="Mail"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-icon-2"
        value="email@gmail.com"
        onChange={() => {}}
        placeholder="Enter a size"
        icon="Mail"
      />
      <br />
      <br />
      <TextField
        id="storybook-textfield-icon-3"
        value="email@gmail.com"
        onChange={() => {}}
        placeholder="Enter a size"
        icon="Mail"
        disabled
      />
    </div>
  )
}

export const TextFieldForPassword = () => {
  return (
    <div style={{ width: '300px' }}>
      <TextField.Password
        id="storybook-textfield-password-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        size="small"
      />
      <br />
      <br />
      <TextField.Password
        id="storybook-textfield-password-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
      />
      <br />
      <br />
      <TextField.Password
        id="storybook-textfield-password-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        size="large"
      />
      <br />
      <br />
      <TextField.Password
        id="storybook-textfield-password-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        size="small"
        disabled
      />
      <br />
      <br />
      <TextField.Password
        id="storybook-textfield-password-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        disabled
      />
      <br />
      <br />
      <TextField.Password
        id="storybook-textfield-password-1"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        size="large"
        disabled
      />
    </div>
  )
}

export const TextFieldForSearch = () => {
  return (
    <div style={{ width: '400px' }}>
      <TextField.Search id="storybook-textfield-search-1" placeholder="Search" value="" onChange={() => {}} />
      <br />
      <TextField.Search
        id="storybook-textfield-search-2"
        placeholder="Search"
        value="search text"
        onChange={() => {}}
      />
      <br />
      <TextField.Search
        id="storybook-textfield-search-3"
        placeholder="Search"
        value=""
        onChange={() => {}}
        size="large"
      />
      <br />
      <TextField.Search
        id="storybook-textfield-search-4"
        placeholder="Search"
        value="search text"
        onChange={() => {}}
        size="large"
      />
    </div>
  )
}
