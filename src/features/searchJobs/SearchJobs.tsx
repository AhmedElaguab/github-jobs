import React from 'react'
import Container from '../../utils/container/Container'
import Label from '../../utils/label/Label'

const SearchJobs: React.FC = () => {
  return (
    <div className="px-2">
      <Container>
        <div className="relative">
          <div className="p-3 absolute top-50- w-full inset-x-0 bg-white rounded shadow-sm">
            <Label label="Description" />
            <Label label="Location" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SearchJobs
