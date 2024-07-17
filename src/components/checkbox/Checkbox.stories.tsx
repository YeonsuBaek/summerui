import type { Meta } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { useState } from 'react'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta

export const SizesOfCheckbox = () => {
  const [check, setCheck] = useState(false)

  return (
    <>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox id="checkbox-ex-sm" size="small" name="example" value="checkbox1" checked={check} onChange={setCheck}>
          small checkbox
        </Checkbox>
        <Checkbox id="checkbox-ex-md" name="example" value="checkbox1" checked={check} onChange={setCheck}>
          medium checkbox
        </Checkbox>
        <Checkbox id="checkbox-ex-lg" size="large" name="example" value="checkbox1" checked={check} onChange={setCheck}>
          large checkbox
        </Checkbox>
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox id="checkbox-ex-sm" size="small" name="example" value="checkbox1" checked={check} onChange={setCheck}>
          small checkbox
        </Checkbox>
        <Checkbox id="checkbox-ex-md" name="example" value="checkbox1" checked={check} onChange={setCheck}>
          medium checkbox
        </Checkbox>
        <Checkbox id="checkbox-ex-lg" size="large" name="example" value="checkbox1" checked={check} onChange={setCheck}>
          large checkbox
        </Checkbox>
      </div>
    </>
  )
}

export const Example = () => {
  const [check, setCheck] = useState(false)
  return (
    <div className="theme-dark" style={{ padding: '16px' }}>
      <Checkbox id="checkbox-ex-sm" size="small" name="example" value="checkbox1" checked={check} onChange={setCheck}>
        checkbox
      </Checkbox>
      <br />
      <Checkbox id="checkbox-ex-md" name="example" value="checkbox1" checked={check} onChange={setCheck}>
        checkbox
      </Checkbox>
      <br />
      <Checkbox id="checkbox-ex-lg" size="large" name="example" value="checkbox1" checked={check} onChange={setCheck}>
        checkbox
      </Checkbox>
      <br />
      <Checkbox id="checkbox-ex-2" name="example" value="checkbox2" checked={check} onChange={setCheck} disabled>
        disabled checkbox
      </Checkbox>
    </div>
  )
}
