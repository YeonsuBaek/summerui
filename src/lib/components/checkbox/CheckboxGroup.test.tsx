import { fireEvent, render } from '@testing-library/react'
import { Checkbox, CheckboxItemType } from '.'

enum values {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
  green = 'green',
}
const OPTIONS: CheckboxItemType[] = [
  { value: values.red, text: 'Red', id: 'option1' },
  { value: values.blue, text: 'Blue', id: 'option2' },
  { value: values.yellow, text: 'Yellow', id: 'option3' },
  { value: values.green, text: 'Green', id: 'option4', disabled: true },
]

describe('Checkbox Group test', () => {
  test('Checkbox Group has checkboxes', () => {
    const { container } = render(<Checkbox.Group options={OPTIONS} />)

    const checkboxList = Array.from(container.querySelectorAll('.ui-checkbox-check'))
    expect(checkboxList.length).toBe(OPTIONS.length)
  })

  test('Checkbox Group is wrap', () => {
    const { container } = render(<Checkbox.Group options={OPTIONS} wrap />)

    const checkboxGroup = container.querySelector('.ui-checkbox-group')
    expect(checkboxGroup?.classList.contains('wrap')).toBeTruthy()
  })
})
