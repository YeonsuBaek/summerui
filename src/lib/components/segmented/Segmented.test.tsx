import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Segmented from './Segmented'

describe('Segmented test', () => {
  type SIZE_TYPE = 'small' | 'medium' | 'large'

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Segmented has options', (size) => {
    const OPTIONS = ['option1', 'option2', 'option3', 'option4']
    const { container } = render(
      <Segmented id="test-segmented-1" options={OPTIONS} selectedOption={OPTIONS[0]} onSelect={() => {}} size={size} />
    )

    const optionList = Array.from(container.querySelectorAll('.ui-segmented-option'))
    expect(optionList.length).toBe(4)
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Segmented selects option', (size) => {
    const handleClick = jest.fn()
    const OPTIONS = ['option1', 'option2', 'option3', 'option4']
    const { getByText } = render(
      <Segmented
        id="test-segmented-2"
        options={OPTIONS}
        selectedOption={OPTIONS[0]}
        onSelect={handleClick}
        size={size}
      />
    )

    const btn = getByText('option2')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Segmented is disabled', (size) => {
    const handleClick = jest.fn()
    const OPTIONS = ['option1', 'option2', 'option3', 'option4']
    const { getByText } = render(
      <Segmented
        id="test-segmented-3"
        options={OPTIONS}
        selectedOption={OPTIONS[0]}
        onSelect={() => {}}
        size={size}
        disabled
      />
    )

    const btn = getByText('option2')
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
