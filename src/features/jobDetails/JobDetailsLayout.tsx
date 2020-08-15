import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../utils/container/Container'

const JobDetailsLayout: React.FC = ({ children }) => {
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
          <div className="p-3 bg-white rounded shadow-sm">{children}</div>
        </Container>
      </main>
    </div>
  )
}

export default JobDetailsLayout
