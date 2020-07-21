import React from 'react'
import { render } from '@testing-library/react'
import Label from './Label'

test('should render label text', () => {
  const labelText = 'Description'
  const { queryByText } = render(<Label label={labelText} />)
  expect(queryByText(labelText)).toBeInTheDocument()
})
