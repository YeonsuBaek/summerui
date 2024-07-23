import { fireEvent, render, screen } from '@testing-library/react'
import { TextField } from './TextField'
import { Button } from '../button'

describe('TextField 컴포넌트', () => {
  test('라벨이 있는 경우', () => {
    render(<TextField id="test" label="라벨" />)
    const label = screen.getByLabelText('라벨')
    expect(label).toBeInTheDocument()
  })

  test('플레이스홀더가 있는 경우', () => {
    render(<TextField id="test" placeholder="텍스트를 입력하세요" />)
    const placeholder = screen.getByPlaceholderText('텍스트를 입력하세요')
    expect(placeholder).toBeInTheDocument()
  })

  test('헬퍼 텍스트 표시', () => {
    render(<TextField id="test" helperText="내용을 참고해주세요." />)
    const helperText = screen.getByText('내용을 참고해주세요.')
    expect(helperText).toBeInTheDocument()
  })

  test('에러가 있는 경우 에러 텍스트 표시', () => {
    render(<TextField id="test" isError errorText="에러 내용을 참고해주세요." />)
    const errorText = screen.getByText('에러 내용을 참고해주세요.')
    expect(errorText).toBeInTheDocument()
    expect(errorText.classList).toContain('error')
  })

  test('autoFocus인 경우 입력 필드 포커싱', () => {
    render(<TextField id="test" autoFocus />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveFocus()
  })

  test('값 변경 시 onChange 핸들러 호출', () => {
    const handleChange = jest.fn()
    render(<TextField id="test" onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '새 값' } })
    expect(handleChange).toHaveBeenCalledWith('새 값')
  })

  test('읽기 전용 시 입력할 수 없음', () => {
    render(<TextField id="test" readOnly value="읽기 전용 값" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('읽기 전용 값')
    expect(input).toBeDisabled()
  })

  test('비활성화 시 입력할 수 없음', () => {
    render(<TextField id="test" disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  test('추가적인 요소를 내장한 경우', () => {
    render(
      <TextField id="test">
        <Button styleType="filled">버튼</Button>
      </TextField>
    )
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: '버튼' })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    expect(input.nextElementSibling).toBe(button)
  })
})