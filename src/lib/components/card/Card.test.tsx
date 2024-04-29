import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

describe('Card test', () => {
  type SIZE_TYPE = 'medium' | 'large'

  test.each<SIZE_TYPE>(['medium', 'large'])('Card has info', (size) => {
    const { getByText } = render(
      <Card id="test-card-1" title="Test Card" info="This is a test card" image="" size={size} />
    )

    const card = getByText('This is a test card')
    expect(card).toBeTruthy()
  })

  test.each<SIZE_TYPE>(['medium', 'large'])('Card has image', (size) => {
    const handleClick = jest.fn()
    const { container } = render(
      <Card
        id="test-card-3"
        title="Test Card"
        info="This is a test card"
        image="http://placehold.it/320x100"
        size={size}
        onClick={handleClick}
      />
    )

    const image = container.querySelector('.ui-card-image') as HTMLImageElement
    expect(image?.classList.contains('blank')).toBeFalsy()
  })
})
