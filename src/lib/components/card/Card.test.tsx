import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

describe('Card test', () => {
  test('Card has info', () => {
    const { getByText } = render(<Card id="test-card-1" title="Test Card" info="This is a test card" image="" />)

    const card = getByText('This is a test card')
    expect(card).toBeTruthy()
  })

  test('Card has image', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Card
        id="test-card-3"
        title="Test Card"
        info="This is a test card"
        image="http://placehold.it/320x100"
        onClick={handleClick}
      />
    )

    const image = container.querySelector('.ui-card-image') as HTMLImageElement
    expect(image?.classList.contains('blank')).toBeFalsy()
  })
})
