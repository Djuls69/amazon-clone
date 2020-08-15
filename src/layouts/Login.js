import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import logo2 from '../assets/img/amazon-logo2.png'
import { Link } from 'react-router-dom'
import { loginStyles } from './LoginStyles'
import { useFormik } from 'formik'
import { Alert } from '@material-ui/lab'
import { auth } from '../firebase/firebase'

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = "Merci d'entrer votre e-mail"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse e-mail invalide'
  }

  if (!values.password) {
    errors.password = "Merci d'entrer votre mot de passe"
  }

  return errors
}

const Login = ({ history }) => {
  const classes = loginStyles()
  const [signInError, setSignInError] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      signInUser(values.email, values.password)
    }
  })

  const signInUser = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      history.push('/')
    } catch (err) {
      console.error(err.message)
      setSignInError(true)
    }
  }

  return (
    <section className={classes.login}>
      <div className={classes.container}>
        <div style={{ textAlign: 'center' }}>
          <Link to='/'>
            <img className={classes.loginLogo} src={logo2} alt='Amazon Logo' />
          </Link>
        </div>
        <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
          <h1 className={classes.loginTitle}>S'identifier</h1>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Adresse e-email</label>
            <input
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type='email'
            />
            {formik.errors.email && formik.touched.email ? <Alert severity='error'>{formik.errors.email}</Alert> : null}
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Mot de passe</label>
            <input
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type='password'
            />
            {formik.errors.password && formik.touched.password ? (
              <Alert severity='error'>{formik.errors.password}</Alert>
            ) : null}
          </div>
          {signInError && <Alert severity='error'>Mauvais identifiants. Merci de réessayer</Alert>}
          <CustomButton type='submit' text="S'identifier" />
        </form>
        <div className={classes.divider}>
          <span>Nouveau chez Amazon ?</span>
        </div>
        <CustomButton onClick={() => history.push('/register')} secondary text='Créer votre compte Amazon' />
      </div>
    </section>
  )
}

export default Login
