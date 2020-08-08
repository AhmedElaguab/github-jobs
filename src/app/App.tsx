import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import JobDetails from '../pages/JobDetails'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/job/:jobId" component={JobDetails} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
