import type { Meta } from '@storybook/react'
import { RadioGroup } from './RadioGroup'
import { useState } from 'react'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
}

export default meta

export const Example = () => {
  const [selected, setSelected] = useState('value-1')

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

  return <RadioGroup label="label" name="example" options={options} checkedOption={selected} onChange={setSelected} />
}
