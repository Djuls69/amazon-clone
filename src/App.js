import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './layouts/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
