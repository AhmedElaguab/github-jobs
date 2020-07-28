import React from 'react'
import { render } from '@testing-library/react'
import Label from './Label'

test('should render label text', () => {
  const labelText = 'Description'
  const { queryByLabelText, debug } = render(
    <Label label={labelText}>
      <input />
    </Label>,
  )
  expect(queryByLabelText(labelText)).toBeInTheDocument()
})
