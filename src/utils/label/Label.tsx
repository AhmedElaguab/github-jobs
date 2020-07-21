import React from 'react'

interface Props {
  label: string
}

const Label: React.FC<Props> = ({ label }) => {
  return (
    <label className="text-md uppercase tracking-wider font-semibold text-gray-700">
      {label}
    </label>
  )
}

export default Label
