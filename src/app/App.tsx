import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="app pt-48">
        <Header />
        <Content />
      </div>
    </Provider>
  )
}

export default App
