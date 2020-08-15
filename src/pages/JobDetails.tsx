import React from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetchJob from '../hooks/useFetchJob'
import JobDetailsLayout from '../features/jobDetails/JobDetailsLayout'

const JobDetails = () => {
  const { jobId } = useParams()

  const { job, isLoading, hasError } = useFetchJob(jobId)
  console.log(job)

  if (isLoading) return <JobDetailsLayout>Loading...</JobDetailsLayout>
  if (hasError) {
    return (
      <JobDetailsLayout>
        <div className="p-2 bg-white rounded">
          <div className="bg-white shadow-xs px-2">
            <h2 className="text-lg font-medium text-red-700">
              Try to refresh the page.
            </h2>
            <h3>Error: {hasError}</h3>
          </div>
        </div>
      </JobDetailsLayout>
    )
  }

  return (
    <JobDetailsLayout>
      {job && (
        <div>
          <div>
            <span className="text-xs tracking-wider bg-yellow-600 py-1 px-3 font-medium uppercase rounded">
              {job.type}
            </span>{' '}
            | <span>{job.location}</span>
          </div>
          <h2 className="mt-4 text-3xl font-medium">{job.title}</h2>
          <div className="flex">
            <div
              dangerouslySetInnerHTML={{ __html: job.description }}
              className="mt-5 w-9/12 p-4 job-description"
            />
            <div className="w-3/12">
              <div className="bg-white shadow-md rounded p-3">
                <a href={job.company_url}>
                  <img src={job.company_logo} alt={job.company} />
                </a>
              </div>

              <div className="bg-white mt-3 shadow-md rounded p-3 break-words">
                <p className="text-2xl">How To Apply</p>
                <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </JobDetailsLayout>
  )
}

export default JobDetails
