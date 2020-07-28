import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

test('should be of type "text" by default', () => {
  const labelText = 'Input Field'
  const { queryByLabelText } = render(
    <label>
      {labelText}
      <Input />
    </label>,
  )

  expect(queryByLabelText(labelText)).toBeInTheDocument()
  expect(queryByLabelText(labelText)).toHaveAttribute('type', 'text')
})

test('should be able to accept type of "password"', () => {
  const labelText = 'Input Field'
  const { queryByLabelText } = render(
    <label>
      {labelText}
      <Input type="password" />
    </label>,
  )

  expect(queryByLabelText(labelText)).toHaveAttribute('type', 'password')
})

test('should be able to accept type of "email"', () => {
  const labelText = 'Input Field'
  const { queryByLabelText } = render(
    <label>
      {labelText}
      <Input type="email" />
    </label>,
  )

  expect(queryByLabelText(labelText)).toHaveAttribute('type', 'email')
})

test('should be able to accept id attribure', () => {
  const labelText = 'Input Field'
  const idValue = 'form-input'
  const { queryByLabelText } = render(
    <label>
      {labelText}
      <Input id={idValue} />
    </label>,
  )

  expect(queryByLabelText(labelText)).toHaveAttribute('id', idValue)
})

test('should be able to accept placeholder attribure', () => {
  const labelText = 'Input Field'
  const placeholderValue = 'Enter your name'
  const { queryByLabelText } = render(
    <label>
      {labelText}
      <Input placeholder={placeholderValue} />
    </label>,
  )

  expect(queryByLabelText(labelText)).toHaveAttribute(
    'placeholder',
    placeholderValue,
  )
})

test('should be able to accept value attribure', () => {
  const labelText = 'Input Field'
  const valueValue = 'John'
  const { queryByLabelText } = render(
    <label>
      {labelText}
      <Input value={valueValue} onChange={() => {}} />
    </label>,
  )

  expect(queryByLabelText(labelText)).toHaveAttribute('value', valueValue)
})
