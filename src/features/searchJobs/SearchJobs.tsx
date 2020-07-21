import React, { useState } from 'react'
import Container from '../../utils/container/Container'
import FormInput from '../../utils/formInput/FormInput'

const SearchJobs: React.FC = () => {
  const [description, setDescription] = useState('react')
  const [location, setLocation] = useState('ny')

  return (
    <div className="px-2">
      <Container>
        <div className="relative">
          <div className="p-3 absolute top-50- w-full inset-x-0 bg-white rounded shadow-sm">
            <div className="lg:flex">
              <div className="lg:w-6/12 pr-1">
                <FormInput
                  label="Description"
                  placeholder="Enter description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
              <div className="lg:w-6/12 pl-1">
                <FormInput
                  label="Location"
                  placeholder="Enter location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SearchJobs
