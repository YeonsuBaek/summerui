import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Segmented from './Segmented'
import { SegmentedOptionProps } from '.'

describe('Segmented test', () => {
  type SIZE_TYPE = 'small' | 'medium' | 'large'

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Segmented has options', (size) => {
    enum values {
      daily = 'daily',
      weekly = 'weekly',
      monthly = 'monthly',
    }
    const OPTIONS: SegmentedOptionProps[] = [
      { value: values.daily, text: 'Daily', id: 'option1' },
      { value: values.weekly, text: 'Weekly', id: 'option2' },
      { value: values.monthly, text: 'Monthly', id: 'option3' },
    ]
    const { container } = render(
      <Segmented
        id="test-segmented-1"
        options={OPTIONS}
        selectedOption={OPTIONS[0].value}
        onSelect={() => {}}
        size={size}
      />
    )

    const optionList = Array.from(container.querySelectorAll('.ui-segmented-option'))
    expect(optionList.length).toBe(3)
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Segmented selects option', (size) => {
    const handleClick = jest.fn()
    enum values {
      daily = 'daily',
      weekly = 'weekly',
      monthly = 'monthly',
    }
    const OPTIONS: SegmentedOptionProps[] = [
      { value: values.daily, text: 'Daily', id: 'option1' },
      { value: values.weekly, text: 'Weekly', id: 'option2' },
      { value: values.monthly, text: 'Monthly', id: 'option3' },
    ]
    const { getByText } = render(
      <Segmented
        id="test-segmented-2"
        options={OPTIONS}
        selectedOption={OPTIONS[0].value}
        onSelect={handleClick}
        size={size}
      />
    )

    const btn = getByText('Weekly')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Segmented is disabled', (size) => {
    const handleClick = jest.fn()
    enum values {
      daily = 'daily',
      weekly = 'weekly',
      monthly = 'monthly',
    }
    const OPTIONS: SegmentedOptionProps[] = [
      { value: values.daily, text: 'Daily', id: 'option1' },
      { value: values.weekly, text: 'Weekly', id: 'option2' },
      { value: values.monthly, text: 'Monthly', id: 'option3' },
    ]
    const { getByText } = render(
      <Segmented
        id="test-segmented-3"
        options={OPTIONS}
        selectedOption={OPTIONS[0].value}
        onSelect={() => {}}
        size={size}
        disabled
      />
    )

    const btn = getByText('Weekly')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
