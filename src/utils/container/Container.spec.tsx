import React from 'react'
import { render } from '@testing-library/react'
import Container from './Container'

test('should render children content', () => {
  const content = 'Hello, world!!'
  const { queryByText } = render(<Container>{content}</Container>)
  expect(queryByText(content)).toBeInTheDocument()
})
