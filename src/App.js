import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import Login from './layouts/Login'
import Register from './layouts/Register'
import { signinUser } from './redux/actions'
import { connect } from 'react-redux'
import { auth, db, createUserProfileDB } from './firebase/firebase'
import Checkout from './layouts/Checkout'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const mapDispatch = dispatch => ({
  signinUser: user => dispatch(signinUser(user))
})

const App = ({ signinUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        await createUserProfileDB(user)
        db.collection('users')
          .doc(user.uid)
          .onSnapshot(doc => {
            signinUser(doc.data())
          })
      } else {
        signinUser(user)
      }
    })
  }, [signinUser])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/checkout/basket' component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default connect(null, mapDispatch)(App)
