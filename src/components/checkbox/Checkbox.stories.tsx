import type { Meta } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'
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

export const GroupOfCheckbox = () => {
  const [selected, setSelected] = useState(['value-1']) // options의 value 값을 넣어주세요.
  const options = [
    {
      id: 'option-1',
      value: 'value-1',
      label: 'label-1',
    },
    {
      id: 'option-2',
      value: 'value-2',
      label: 'label-2',
    },
    {
      id: 'option-3',
      value: 'value-3',
      label: 'label-3',
      disabled: true,
    },
  ]

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CheckboxGroup
        options={options}
        label="label 라벨"
        name="example"
        checkedOptions={selected}
        onChange={setSelected}
        size="small"
      />
      <CheckboxGroup
        options={options}
        label="label 라벨"
        name="example"
        checkedOptions={selected}
        onChange={setSelected}
      />
      <CheckboxGroup
        options={options}
        label="label 라벨"
        name="example"
        checkedOptions={selected}
        onChange={setSelected}
        size="large"
        direction="vertical"
      />
    </div>
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
