import React from 'react'
import Container from '../utils/container/Container'

const Header: React.FC = () => {
  return (
    <header className="pt-10 pb-24 fixed w-full inset-x-0 bg-indigo-700 text-white">
      <Container>
        <div className="px-2">
          <h1 className="text-3xl font-bold capitalize">Github Jobs</h1>
        </div>
      </Container>
    </header>
  )
}

export default Header
