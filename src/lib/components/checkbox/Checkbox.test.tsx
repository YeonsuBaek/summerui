import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Checkbox } from '.'

describe('Checkbox test', () => {
  test('Checkbox is wrap', () => {
    const OPTIONS = ['option1', 'option2', 'option3']
    const { container } = render(
      <Checkbox id="test-checkbox-1" options={OPTIONS} selectedOptions={[]} onSelect={() => {}} wrap />
    )

    const CheckboxElem = container.querySelector('.ui-checkbox')
    expect(CheckboxElem?.classList.contains('wrap')).toBeTruthy()
  })

  test('Checkbox is disabled', () => {
    const OPTIONS = ['option1', 'option2', 'option3']
    const handleSelect = jest.fn()
    const { getByText } = render(
      <Checkbox id="test-checkbox-2" options={OPTIONS} selectedOptions={[]} onSelect={handleSelect} disabled />
    )

    const btn = getByText('option2')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleSelect).toHaveBeenCalledTimes(0)
  })

  test('Checkbox selects a option', () => {
    const OPTIONS = ['option1', 'option2', 'option3']
    const handleSelect = jest.fn()
    const { container, getByText } = render(
      <Checkbox id="test-checkbox-3" options={OPTIONS} selectedOptions={[]} onSelect={handleSelect} />
    )

    const btn = getByText('option2')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
})
