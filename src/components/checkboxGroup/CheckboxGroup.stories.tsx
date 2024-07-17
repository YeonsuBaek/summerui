import type { Meta } from '@storybook/react'
import { CheckboxGroup } from './CheckboxGroup'
import { useState } from 'react'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
}

export default meta

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
