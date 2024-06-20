import React from 'react'
import { render } from '@testing-library/react'
import Loading from './Loading'

describe('Loading test', () => {
  type SIZE_TYPE = 'small' | 'medium' | 'large'

  test('Loading render', () => {
    const { container } = render(<Loading />)

    const loading = container.querySelector('.ui-loading')
    expect(loading).toBeTruthy()
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Loading has size', (size) => {
    const { container } = render(<Loading size={size} />)

    const loading = container.querySelector('.ui-loading')
    expect(loading?.classList.contains(size)).toBeTruthy()
  })

  test.each<SIZE_TYPE>(['small', 'medium', 'large'])('Loading has message', (size) => {
    const { getByText } = render(<Loading size={size} message="Loading" />)

    const loading = getByText('Loading')
    expect(loading).toBeTruthy()
  })
})
