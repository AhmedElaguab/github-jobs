import React from 'react'
import SearchJobs from '../features/searchJobs/SearchJobs'
import JobsList from '../features/jobsList/JobsList'

const Content: React.FC = () => {
  return (
    <main>
      <SearchJobs />
      <JobsList />
    </main>
  )
}

export default Content
