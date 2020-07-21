import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div className="bg mx-auto w-full lg:w-10/12 xl:w-8/12">{children}</div>
  )
}

export default Container
