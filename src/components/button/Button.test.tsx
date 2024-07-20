import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'
import { CaretLeftIcon, CaretRightIcon } from '../../assets/icon'

describe('Button test', () => {
  test('기본 props로 버튼 렌더링', () => {
    render(<Button styleType="filled">버튼</Button>)
    const button = screen.getByRole('button', { name: '버튼' })
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
    fireEvent.click(button)
  })

  test('custom className으로 렌더링', () => {
    render(
      <Button styleType="filled" className="custom-class">
        버튼
      </Button>
    )
    const button = screen.getByRole('button', { name: '버튼' })
    expect(button).toHaveClass('custom-class')
  })

  test('disabled prop이 true일 때 비활성화 렌더링', () => {
    render(
      <Button styleType="filled" disabled>
        버튼
      </Button>
    )
    const button = screen.getByRole('button', { name: '버튼' })
    expect(button).toBeDisabled()
  })

  test('클릭 시 onClick 핸들러 호출', () => {
    const handleClick = jest.fn()
    render(
      <Button styleType="filled" onClick={handleClick}>
        버튼
      </Button>
    )
    const button = screen.getByRole('button', { name: '버튼' })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('Icon과 함께 렌더링', () => {
    render(
      <Button styleType="filled" StartIcon={CaretLeftIcon} EndIcon={CaretRightIcon}>
        클릭하세요
      </Button>
    )
    const icons = document.querySelectorAll('svg')
    expect(icons).toHaveLength(2)
  })

  test('size prop에 따라 아이콘 크기 조정', () => {
    const { container: buttonSmall } = render(
      <Button styleType="filled" StartIcon={CaretLeftIcon} size="small">
        버튼
      </Button>
    )
    const iconSmall = buttonSmall.querySelector('svg')
    expect(iconSmall).toHaveAttribute('width', 20 / 16 + 'rem')
    expect(iconSmall).toHaveAttribute('height', 20 / 16 + 'rem')

    const { container: buttonLarge } = render(
      <Button styleType="filled" StartIcon={CaretLeftIcon} size="large">
        버튼
      </Button>
    )
    const iconLarge = buttonLarge.querySelector('svg')
    expect(iconLarge).toHaveAttribute('width', 24 / 16 + 'rem')
    expect(iconLarge).toHaveAttribute('height', 24 / 16 + 'rem')
  })

  test('Icon 버튼인데 Icon props 넣을 때 Icon props는 무시', () => {
    render(
      <Button styleType="icon" StartIcon={CaretLeftIcon} EndIcon={CaretRightIcon}>
        <CaretRightIcon />
      </Button>
    )
    const icon = document.querySelectorAll('svg')
    expect(icon).toHaveLength(1)
  })
})
