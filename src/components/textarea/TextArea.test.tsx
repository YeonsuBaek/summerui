import { render, screen, fireEvent } from '@testing-library/react'
import { TextArea } from './TextArea'

describe('TextArea 컴포넌트', () => {
  test('라벨이 있는 경우', () => {
    render(<TextArea id="test" label="라벨" />)
    const label = screen.getByLabelText('라벨')
    expect(label).toBeInTheDocument()
  })

  test('플레이스홀더가 있는 경우', () => {
    render(<TextArea id="test" placeholder="텍스트를 입력하세요" />)
    const placeholder = screen.getByPlaceholderText('텍스트를 입력하세요')
    expect(placeholder).toBeInTheDocument()
  })

  test('헬퍼 텍스트 표시', () => {
    render(<TextArea id="test" helperText="내용을 참고해주세요." />)
    const helperText = screen.getByText('내용을 참고해주세요.')
    expect(helperText).toBeInTheDocument()
  })

  test('에러가 있는 경우 에러 텍스트 표시', () => {
    render(<TextArea id="test" error errorText="에러 내용을 참고해주세요." />)
    const errorText = screen.getByText('에러 내용을 참고해주세요.')
    expect(errorText).toBeInTheDocument()
    expect(errorText.classList).toContain('error')
  })

  test('autoFocus인 경우 입력 필드 포커싱', () => {
    render(<TextArea id="test" autoFocus />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveFocus()
  })

  test('값 변경 시 onChange 핸들러 호출', () => {
    const handleChange = jest.fn()
    render(<TextArea id="test" onChange={handleChange} />)
    const textarea = screen.getByRole('textbox')
    fireEvent.change(textarea, { target: { value: '새 값' } })
    expect(handleChange).toHaveBeenCalledWith('새 값')
  })

  test('읽기 전용 시 입력할 수 없음', () => {
    render(<TextArea id="test" readOnly value="읽기 전용 값" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue('읽기 전용 값')
    expect(textarea).toBeDisabled()
  })

  test('비활성화 시 입력할 수 없음', () => {
    render(<TextArea id="test" disabled />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeDisabled()
  })

  test('입력 값 길이 표시', () => {
    render(<TextArea id="test" maxLength={10} value="123456" />)
    const valueLength = screen.getByText('6')
    expect(valueLength).toBeInTheDocument()
  })

  test('최대 길이 초과 시 에러 표시', () => {
    render(<TextArea id="test" maxLength={5} value="123456" />)
    const valueLength = screen.getByText('6')
    expect(valueLength).toBeInTheDocument()
    expect(valueLength).toHaveClass('max')
  })

  test('rows 속성이 적용되는 경우', () => {
    render(<TextArea id="test" rows={5} />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('rows', '5')
  })
})
