import React from 'react'
import { Job as JobType } from '../../hooks/useFetchJobs'

const Job = ({ job }: { job: JobType }) => {
  return (
    <div className="p-2 mb-2 rounded shadow-xs">
      <div>
        <h4 className="text-sm text-gray-600">
          {/* <small className="bg-yellow-600 text-gray-900 rounded py-1 px-2 mr-3 font-medium">
            {job.type}
          </small> */}
          {job.company}
        </h4>
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
