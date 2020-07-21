import React from 'react'
import Label from '../label/Label'
import Input from '../input/Input'

interface Props {
  label: string
  placeholder?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const FormInput: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4 flex flex-col">
      <Label label={label} />
      <Input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput
