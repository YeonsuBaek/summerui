import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Checkbox } from '.'

describe('Checkbox test', () => {
  test('Checkbox is clicked', () => {
    const handleChange = jest.fn()
    const { getByText } = render(
      <Checkbox id="checkbox-test-1" value="example" text="Example" checked={false} onChange={handleChange} />
    )

    const input = getByText('Example')
    fireEvent.click(input)
    expect(handleChange).toBeCalledTimes(1)
  })

  test('Checkbox is disabled', () => {
    const handleChange = jest.fn()
    const { getByText } = render(
      <Checkbox id="checkbox-test-2" value="example" text="Example" checked={false} onChange={handleChange} disabled />
    )

    const input = getByText('Example')
    fireEvent.click(input)
    expect(handleChange).toBeCalledTimes(0)
  })

  test('Checkbox is checked', () => {
    const { container: container1 } = render(
      <Checkbox id="checkbox-test-3" value="example" text="Example" checked={false} />
    )

    const icon1 = container1.querySelector('.ui-checkbox-icon')
    expect(icon1?.classList.contains('checked')).toBeFalsy()

    const { container: container2 } = render(
      <Checkbox id="checkbox-test-4" value="example" text="Example" checked={true} />
    )

    const icon2 = container2.querySelector('.ui-checkbox-icon')
    expect(icon2?.classList.contains('checked')).toBeTruthy()
  })

  test('Checkbox has text', () => {
    const { getByText: getByText1 } = render(
      <Checkbox id="checkbox-test-5" value="example" text="Example" checked={false} />
    )

    const text1 = getByText1('Example')
    expect(text1.innerHTML).toBe('Example')

    const { getByText: getByText2 } = render(<Checkbox id="checkbox-test-6" value="example" checked={true} />)

    const text2 = getByText2('example')
    expect(text2.innerHTML).toBe('example')
  })
})
