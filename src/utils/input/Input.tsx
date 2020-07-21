import React from 'react'

interface Props {
  type?: 'text' | 'password' | 'email'
  id?: string
  placeholder?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<Props> = ({
  type = 'text',
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className="p-2 text-lg border border-gray-600 rounded"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
