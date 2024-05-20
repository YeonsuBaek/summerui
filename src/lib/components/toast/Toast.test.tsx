import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Toast from './Toast'

describe('Toast test', () => {
  test('Toast has message', () => {
    const { getByText } = render(<Toast isOpen message="toast test 1" />)

    const toast = getByText('toast test 1')

    expect(toast).toBeTruthy()
  })

  test('Toast has closeButton', () => {
    const handleClose = jest.fn()
    render(<Toast isOpen message="toast test 2" hasCloseButton onClose={handleClose} />)

    const btn = document.querySelector('.ui-icon-button') as HTMLButtonElement
    expect(btn).toBeTruthy()

    fireEvent.click(btn)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('Toast has duration', async () => {
    jest.useFakeTimers()
    const TIMER = 3000
    const handleClose = jest.fn()
    render(<Toast isOpen message="toast test 3" duration={TIMER} hasCloseButton onClose={handleClose} />)

    jest.advanceTimersByTime(TIMER)
    await waitFor(() => expect(handleClose).toHaveBeenCalled())
  })

  type color = 'success' | 'info' | 'error' | 'warning'

  test.each<color>(['success', 'info', 'error', 'warning'])('Toast has color', (color) => {
    render(<Toast isOpen message={`toast test ${color}`} color={color} />)

    const toast = document.querySelector('.ui-toast')
    expect(toast?.classList.contains(color)).toBeTruthy()
  })
})
