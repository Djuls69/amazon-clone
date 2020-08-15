import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import Login from './layouts/Login'
import Register from './layouts/Register'
import { signinUser } from './redux/actions'
import { connect } from 'react-redux'
import { auth } from './firebase/firebase'
import Checkout from './layouts/Checkout'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const mapDispatch = dispatch => ({
  signinUser: user => dispatch(signinUser(user))
})

const App = ({ signinUser }) => {
  const [name, setName] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        try {
          if (!user.displayName) {
            await user.updateProfile({
              displayName: name
            })
          }
          const userToLog = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            basket: []
          }
          signinUser(userToLog)
        } catch (err) {
          console.log(err.message)
        }
      } else {
        signinUser(user)
      }
    })
  }, [signinUser, name])

  const changeDisplayName = name => {
    setName(name)
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register'>
          <Register changeDisplayName={changeDisplayName} />
        </Route>
        <Route exact path='/checkout/:uid/basket' component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default connect(null, mapDispatch)(App)
