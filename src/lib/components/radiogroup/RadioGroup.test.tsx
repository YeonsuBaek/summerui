import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { RadioGroup, RadioOptionProps } from '.'

describe('Radio Group test', () => {
  test('Radio Group has options', () => {
    enum values {
      daily = 'daily',
      weekly = 'weekly',
      monthly = 'monthly',
    }
    const OPTIONS: RadioOptionProps[] = [
      { value: values.daily, text: 'Daily', id: 'option1' },
      { value: values.weekly, text: 'Weekly', id: 'option2' },
      { value: values.monthly, text: 'Monthly', id: 'option3' },
    ]
    const { container } = render(
      <RadioGroup id="test-radio-group-1" options={OPTIONS} selectedOption={OPTIONS[0].value} onSelect={() => {}} />
    )

    const optionList = Array.from(container.querySelectorAll('.ui-radio-option-radio'))
    expect(optionList.length).toBe(3)
  })

  test('Radio Group selects option', () => {
    const handleClick = jest.fn()
    enum values {
      daily = 'daily',
      weekly = 'weekly',
      monthly = 'monthly',
    }
    const OPTIONS: RadioOptionProps[] = [
      { value: values.daily, text: 'Daily', id: 'option1' },
      { value: values.weekly, text: 'Weekly', id: 'option2' },
      { value: values.monthly, text: 'Monthly', id: 'option3' },
    ]
    const { getByText } = render(
      <RadioGroup id="test-radio-group-2" options={OPTIONS} selectedOption={OPTIONS[0].value} onSelect={handleClick} />
    )

    const btn = getByText('Weekly')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('Radio Group has disabled options', () => {
    const handleClick = jest.fn()
    enum values {
      daily = 'daily',
      weekly = 'weekly',
      monthly = 'monthly',
    }
    const OPTIONS: RadioOptionProps[] = [
      { value: values.daily, text: 'Daily', id: 'option1', disabled: true },
      { value: values.weekly, text: 'Weekly', id: 'option2', disabled: true },
      { value: values.monthly, text: 'Monthly', id: 'option3', disabled: true },
    ]
    const { getByText } = render(
      <RadioGroup id="test-radio-group-3" options={OPTIONS} selectedOption={OPTIONS[0].value} onSelect={() => {}} />
    )

    const btn = getByText('Weekly')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
