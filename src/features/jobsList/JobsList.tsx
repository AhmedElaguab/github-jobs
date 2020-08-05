import React from 'react'
import Container from '../../utils/container/Container'

const JobsList = () => {
  return (
    <div className="pt-24 px-2">
      <Container>
        <div className="p-2 bg-white rounded">
          <div className="bg-white shadow-xs px-2">
            <h2 className="text-lg font-medium">Job Title</h2>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default JobsList
