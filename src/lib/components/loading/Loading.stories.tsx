import type { ComponentStory, Meta } from '@storybook/react'
import { Loading } from '.'

const meta: Meta<typeof Loading> = {
  title: 'Component/Loading',
  component: Loading,
  argTypes: {},
}

export default meta

const InteractionTemplate: ComponentStory<typeof Loading> = (args) => <Loading {...args} />

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  message: 'Loading...',
}

export const LoadingSizes = () => {
  return (
    <>
      <Loading size="small" />
      <br />
      <br />
      <Loading size="medium" />
      <br />
      <br />
      <Loading size="large" />
    </>
  )
}

export const LoadingWithMessage = () => {
  return (
    <>
      <Loading size="small" message="Loading" />
      <br />
      <br />
      <Loading size="medium" message="Loading" />
      <br />
      <br />
      <Loading size="large" message="Loading" />
    </>
  )
}
