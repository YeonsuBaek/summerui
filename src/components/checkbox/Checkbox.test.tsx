import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox 컴포넌트 테스트', () => {
  test('기본 렌더링 테스트', () => {
    render(
      <Checkbox id="test" name="test" value="test">
        라벨
      </Checkbox>
    )
    const input = screen.getByLabelText('라벨')
    expect(input).toBeInTheDocument()
  })

  test('체크박스 체크 상태 테스트', () => {
    render(
      <Checkbox id="test" name="test" value="test" checked>
        라벨
      </Checkbox>
    )
    const input = screen.getByLabelText('라벨')
    expect(input).toBeChecked()
  })

  test('체크박스 비활성화 상태 테스트', () => {
    render(
      <Checkbox id="test" name="test" value="test" disabled>
        라벨
      </Checkbox>
    )
    const input = screen.getByLabelText('라벨')
    expect(input).toBeDisabled()
  })

  test('체크박스 onChange 핸들러 테스트', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox id="test" name="test" value="test" onChange={handleChange}>
        라벨
      </Checkbox>
    )
    const input = screen.getByLabelText('라벨')
    fireEvent.click(input)
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  test('Enter 키 입력 테스트', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox id="test" name="test" value="test" onChange={handleChange}>
        라벨
      </Checkbox>
    )
    const input = screen.getByLabelText('라벨')
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(handleChange).toHaveBeenCalled()
  })

  test('비활성화 시 Enter 키 입력 테스트', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox id="test" name="test" value="test" onChange={handleChange} disabled>
        라벨
      </Checkbox>
    )
    const input = screen.getByLabelText('라벨')
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(handleChange).not.toHaveBeenCalled()
  })

  test.each<'small' | 'medium' | 'large'>(['small', 'medium', 'large'])('체크박스 크키 테스트', (size) => {
    const { container } = render(
      <Checkbox id="test" name="test" value="test" size={size} checked>
        라벨
      </Checkbox>
    )
    const icon = container.querySelector('svg')
    const iconSize = size === 'small' ? 12 : size === 'large' ? 20 : 16
    expect(icon).toHaveAttribute('width', iconSize / 16 + 'rem')
    expect(icon).toHaveAttribute('height', iconSize / 16 + 'rem')
  })
})
