import React, { useCallback, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './../../app/rootReducer'
import { setDescription, setLocation } from './searchSlice'

import Container from '../../utils/container/Container'
import FormInput from '../../utils/formInput/FormInput'

const SearchJobs: React.FC = () => {
  const { description, location } = useSelector(
    (state: RootState) => state.search,
  )

  const dispatch = useDispatch()
  const handleDescriptionChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setDescription(e.target.value))
    },
    [dispatch],
  )

  const handleLocationChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setLocation(e.target.value))
    },
    [dispatch],
  )

  return (
    <div className="px-2 relative top-50 text-gray-900">
      <Container>
        <div>
          <div className="p-3 w-full inset-x-0 bg-white rounded shadow-sm">
            <div className="lg:flex">
              <div className="lg:w-6/12 pr-1">
                <FormInput
                  label="Description"
                  placeholder="Enter description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="lg:w-6/12 pl-1">
                <FormInput
                  label="Location"
                  placeholder="Enter location"
                  value={location}
                  onChange={handleLocationChange}
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
