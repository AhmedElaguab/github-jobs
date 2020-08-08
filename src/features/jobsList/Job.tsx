import React from 'react'
import { Job as JobType } from '../../hooks/useFetchJobs'

const Job = ({ job }: { job: JobType }) => {
  return (
    <div className="p-2 mb-2 rounded shadow-xs">
      <div className="flex">
        <h4 className="flex-grow text-sm text-gray-600">{job.company}</h4>
        {job.company_logo && (
          <img
            className="h-8 w-8 object-contain"
            src={job.company_logo}
            alt={job.company}
          />
        )}
      </div>
      <h3 className="mt-1 text-2xl">{job.title}</h3>
      <div className="flex">
        <h4 className="text-sm text-gray-600 flex-grow">{job.location}</h4>
        <h4 className="text-sm text-gray-600">{job.created_at}</h4>
      </div>
    </div>
  )
}

export default Job
