import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Container from '../utils/container/Container'

const JobDetails = () => {
  const { jobId } = useParams()

  return (
    <div className="pt-24">
      <header className="fixed w-full inset-x-0 top-0 bg-indigo-700 text-white">
        <Container>
          <div className="px-2 h-full">
            <Link to="/">
              <h1 className="py-4 text-3xl font-medium capitalize">
                Github Jobs
              </h1>
            </Link>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <div>{jobId}</div>
        </Container>
      </main>
    </div>
  )
}

export default JobDetails
