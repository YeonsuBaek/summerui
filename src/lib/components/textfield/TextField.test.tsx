import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { TextField } from '.'

describe('TextField test', () => {
  type SIZE_TYPE = 'small' | 'medium' | 'large'

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('TextField with suffix', (size) => {
    const { getByText, getByDisplayValue } = render(
      <TextField id="test-textfield-1" value="100" onChange={() => {}} size={size} suffix="%" />
    )

    const suffix = getByText('%')
    const input = getByDisplayValue('100')

    expect(suffix).toBeTruthy()
    expect(suffix.classList.contains('ui-textfield-suffix')).toBeTruthy()

    const padding = parseInt(input.style.paddingRight, 10)
    expect(padding > (size === 'small' ? 7 : 11)).toBeTruthy()
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('TextField with icon', (size) => {
    const { container, getByDisplayValue } = render(
      <TextField id="test-textfield-2" value="010-1234-5678" onChange={() => {}} size={size} icon="Phone" />
    )

    const icon = container.querySelector('.ui-textfield-icon')
    const input = getByDisplayValue('010-1234-5678')

    expect(icon).toBeTruthy()

    const iconSize = Number(icon?.getAttribute('width'))
    expect(iconSize === (size === 'large' ? 20 : 16)).toBeTruthy()

    const padding = parseInt(input.style.paddingLeft, 10)
    expect(padding > (size === 'small' ? 7 : 11)).toBeTruthy()
  })

  test('TextField for password', () => {
    const { container, getByDisplayValue } = render(
      <TextField.Password id="test-textfield-3" value="1234" onChange={() => {}} />
    )

    const input = getByDisplayValue('1234')
    const eyeButton = container.querySelector('.ui-icon-button') as HTMLButtonElement

    fireEvent.click(eyeButton)
    expect(input.getAttribute('type')).toBe('text')
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('IconButton Size', (size) => {
    const { container: PasswordContainer } = render(
      <TextField.Password id={`test-textfield-4-${size}`} size={size} value="1234" onChange={() => {}} />
    )
    expect(PasswordContainer).toBeTruthy()
  })

  test('TextField is autofocus', () => {
    const { getByDisplayValue } = render(<TextField id="test-textfield-5" value="1234" onChange={() => {}} autoFocus />)
    const input = getByDisplayValue('1234')
    expect(document.activeElement).toEqual(input)
  })
})
