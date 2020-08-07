import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../app/rootReducer'
import useFetchJobs from '../../hooks/useFetchJobs'

import Container from '../../utils/container/Container'
import Job from './Job'

const Loading = () => {
  return (
    <div className="pt-24 px-2">
      <Container>
        <div className="p-2 bg-white rounded">
          <div className="bg-white shadow-xs px-2">
            <h2 className="text-lg font-medium">Loading..</h2>
          </div>
        </div>
      </Container>
    </div>
  )
}

const OnError = ({ error }: { error: string }) => {
  return (
    <div className="pt-24 px-2">
      <Container>
        <div className="p-2 bg-white rounded">
          <div className="bg-white shadow-xs px-2">
            <h2 className="text-lg font-medium text-red-700">
              Try to refresh the page.
            </h2>
            <h3>Error: {error}</h3>
          </div>
        </div>
      </Container>
    </div>
  )
}

const JobsList = () => {
  const [page, setPage] = useState(0)
  const description = useSelector(
    (state: RootState) => state.search.description,
  )
  const location = useSelector((state: RootState) => state.search.location)

  const { isLoading, hasError, jobs } = useFetchJobs({
    description,
    location,
    page,
  })

  if (isLoading) return <Loading />
  if (hasError) return <OnError error={hasError} />
  return (
    <div className="pt-24 px-2">
      <Container>
        <div className="p-2 bg-white rounded">
          {jobs && jobs.length > 0
            ? jobs.map(job => <Job key={job.id} job={job} />)
            : 'No jobs found.'}
        </div>
      </Container>
    </div>
  )
}

export default JobsList
