import React from 'react'
import { useFormik } from 'formik'
import CustomButton from '../components/CustomButton'
import logo2 from '../assets/img/amazon-logo2.png'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { registerStyles } from './RegisterStyles'
import { Alert } from '@material-ui/lab'

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = "Merci d'indiquer votre nom"
  }

  if (!values.email) {
    errors.email = "Merci d'indiquer votre e-mail"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse e-mail invalide'
  }

  if (!values.password) {
    errors.password = "Merci d'indiquer votre mot de passe"
  } else if (values.password.length < 6) {
    errors.password = 'Au minimum 6 caractères'
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Merci de répéter votre mot de passe'
  }

  if (values.repeatPassword !== values.password) {
    errors.repeatPassword = 'Les mots de passe ne correspondent pas'
  }
  return errors
}

const Register = ({ history }) => {
  const classes = registerStyles()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    validate,
    onSubmit: values => {
      createNewUser(values.email, values.password)
    }
  })

  const createNewUser = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      history.push('/')
    } catch (error) {
      console.error("Impossible d'enregistrer cet utilisateur", error.message)
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
          <h1 className={classes.loginTitle}>Créer un compte</h1>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Votre nom</label>
            <input
              name='name'
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type='text'
            />
            {formik.errors.name && formik.touched.name ? <Alert severity='error'>{formik.errors.name}</Alert> : null}
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>E-email</label>
            <input
              name='email'
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type='email'
            />
            {formik.errors.email && formik.touched.email ? <Alert severity='error'>{formik.errors.email}</Alert> : null}
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Mot de passe</label>
            <input
              name='password'
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type='password'
            />
            {formik.errors.password && formik.touched.password ? (
              <Alert severity='error'>{formik.errors.password}</Alert>
            ) : null}
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Entrez le mot de passe à nouveau</label>
            <input
              name='repeatPassword'
              value={formik.values.repeatPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type='password'
            />
            {formik.errors.repeatPassword && formik.touched.repeatPassword ? (
              <Alert severity='error'>{formik.errors.repeatPassword}</Alert>
            ) : null}
          </div>
          <CustomButton type='submit' text='Créer votre compte Amazon' />
          <p className={classes.formCopy}>
            En créant un compte, vous acceptez les Conditions générales de vente d’Amazon. Veuillez consulter notre
            Notice Protection de vos Informations Personnelles, notre Notice Cookies et notre Notice Annonces
            publicitaires basées sur vos centres d’intérêt.
          </p>
        </form>
        <div className={classes.divider}>
          <span>Vous possédez déjà un compte ?</span>{' '}
          <Link className={classes.dividerLink} to='/login'>
            Identifiez-vous
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Register
