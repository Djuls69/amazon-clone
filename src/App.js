import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import Login from './layouts/Login'
import Register from './layouts/Register'
import { signinUser } from './redux/actions'
import { connect } from 'react-redux'
import { auth, db } from './firebase/firebase'

const mapDispatch = dispatch => ({
  signinUser: user => dispatch(signinUser(user))
})

const App = ({ signinUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const userToLog = await db.collection('users').doc(auth.currentUser.uid).get()
        signinUser(userToLog.data())
      } else {
        signinUser(user)
      }
    })
  }, [signinUser])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default connect(null, mapDispatch)(App)
