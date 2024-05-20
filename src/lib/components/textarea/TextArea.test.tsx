import React from 'react'
import { render } from '@testing-library/react'
import TextArea from './TextArea'

describe('TextArea test', () => {
  test('TextArea with count', () => {
    const { getByDisplayValue } = render(<TextArea id="test-textarea-1" value="value" onChange={() => {}} />)

    const input = getByDisplayValue('value')

    expect(input).toBeTruthy()
  })

  test('TextArea is autofocus', () => {
    const { getByDisplayValue } = render(<TextArea id="test-textarea-2" value="value" onChange={() => {}} autoFocus />)
    const input = getByDisplayValue('value')
    expect(document.activeElement).toEqual(input)
  })

  test('TextArea counts length', () => {
    const { container } = render(<TextArea id="test-textarea-3" value="값은 value" onChange={() => {}} maxText={20} />)
    const countElement = container.querySelector('.ui-textarea-count')
    expect(countElement?.textContent).toBe('10 / 20')
  })

  test("TextArea value's length are over", () => {
    const { container } = render(<TextArea id="test-textarea-4" value="값은 value" onChange={() => {}} maxText={5} />)
    const countElement = container.querySelector('.ui-textarea-count')
    expect(countElement?.classList.contains('overText')).toBeTruthy()
  })

  test('TextArea has helperText', () => {
    const { container } = render(
      <TextArea id="test-textarea-5" value="값은 value" onChange={() => {}} helperText="Helper Text" />
    )
    const helperTextElement = container.querySelector('.ui-textarea-helper-text')
    expect(helperTextElement).toBeTruthy()
  })

  test('TextArea is error', () => {
    const { container, getByDisplayValue } = render(
      <TextArea id="test-textarea-6" value="값은 value" onChange={() => {}} isError helperText="Helper Text" />
    )
    const textareaElement = container.querySelector('.ui-textarea')
    expect(textareaElement?.classList.contains('isError')).toBeTruthy()
    const helperTextElement = container.querySelector('.ui-textarea-helper-text')
    expect(helperTextElement?.classList.contains('isError')).toBeTruthy()
  })

  test('TextArea has label', () => {
    const { container } = render(<TextArea id="test-textarea-7" value="value" onChange={() => {}} label="label" />)
    const labelElement = container.querySelector('.ui-textarea-label')
    expect(labelElement).toBeTruthy()
  })
})
