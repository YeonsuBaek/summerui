import type { Meta } from '@storybook/react'
import { Spinner } from '.'
import { Button } from '../button'

const meta: Meta = {
  title: 'Components/Spinner',
  component: Spinner,
}

export default meta

export const SizesOfSpinner = () => {
  return (
    <>
      <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
    </>
  )
}

export const WithOtherComponents = () => {
  return (
    <>
      <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
        <Button styleType="filled" disabled>
          <span style={{ marginRight: '8px' }}>Pending</span>
          <Spinner size="small" />
        </Button>
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
        <Button styleType="filled" disabled>
          <span style={{ marginRight: '8px' }}>Pending</span>
          <Spinner size="small" />
        </Button>
      </div>
    </>
  )
}
