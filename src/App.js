import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './layouts/Home'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
