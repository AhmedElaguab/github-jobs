import React from 'react'

interface Props {
  label: string
}

const Label: React.FC<Props> = ({ label, children }) => {
  return (
    <label
      htmlFor={label}
      className="mb-1 text-sm uppercase tracking-wider font-medium text-gray-700"
    >
      {label}
      {children}
    </label>
  )
}

export default Label
