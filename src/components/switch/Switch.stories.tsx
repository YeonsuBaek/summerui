import type { Meta } from '@storybook/react'
import { Switch } from './Switch'
import { useState } from 'react'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta

export const SizesOfSwitch = () => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch id="switch-ex-sm" size="small" checked={checked} onChecked={setChecked} />
        <Switch id="switch-ex-md" checked={checked} onChecked={setChecked} />
        <Switch id="switch-ex-lg" size="large" checked={checked} onChecked={setChecked} />
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch id="switch-ex-sm" size="small" checked={checked} onChecked={setChecked} />
        <Switch id="switch-ex-md" checked={checked} onChecked={setChecked} />
        <Switch id="switch-ex-lg" size="large" checked={checked} onChecked={setChecked} />
      </div>
    </>
  )
}

export const SwitchWithLabel = () => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch id="switch-ex-sm-label" size="small" checked={checked} onChecked={setChecked}>
          small switch
        </Switch>
        <Switch id="switch-ex-md-label" checked={checked} onChecked={setChecked}>
          medium switch
        </Switch>
        <Switch id="switch-ex-lg-label" size="large" checked={checked} onChecked={setChecked}>
          large switch
        </Switch>
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch id="switch-ex-sm-label" size="small" checked={checked} onChecked={setChecked}>
          small switch
        </Switch>
        <Switch id="switch-ex-md-label" checked={checked} onChecked={setChecked}>
          medium switch
        </Switch>
        <Switch id="switch-ex-lg-label" size="large" checked={checked} onChecked={setChecked}>
          large switch
        </Switch>
      </div>
    </>
  )
}
