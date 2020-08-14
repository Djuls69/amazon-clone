import React from 'react'
import { makeStyles } from '@material-ui/core'
import CustomButton from '../components/CustomButton'
import logo2 from '../assets/img/amazon-logo2.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  login: {
    height: '100vh',
    backgroundColor: '#fff'
  },
  loginLogo: {
    width: '33%',
    objectFit: 'contain'
  },
  container: {
    width: '35rem',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
  },
  loginForm: {
    width: '100%',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3rem'
  },
  loginTitle: {
    fontSize: '2.8rem',
    fontWeight: 400,
    marginBottom: '2rem'
  },
  loginLabel: {
    fontSize: '1.3rem',
    fontWeight: 700
  },
  inputForm: {
    display: 'flex',
    flexDirection: 'column',
    '& input': {
      height: '3rem',
      borderRadius: 3,
      border: '1px solid #aaa',
      marginBottom: '2rem'
    }
  },
  divider: {
    color: '#767676',
    fontSize: '1.3rem',
    textAlign: 'center',
    position: 'relative',
    marginBottom: '2rem'
  },
  dividerLink: {
    color: '#0066c0',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

const Register = ({ history }) => {
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className={classes.login}>
      <div className={classes.container}>
        <div style={{ textAlign: 'center' }}>
          <img className={classes.loginLogo} src={logo2} alt='Amazon Logo' />
        </div>
        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <h1 className={classes.loginTitle}>Créer un compte</h1>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Votre nom</label>
            <input type='text' />
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>E-email</label>
            <input type='email' />
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Mot de passe</label>
            <input type='password' />
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Entrez le mot de passe à nouveau</label>
            <input type='password' />
          </div>
          <CustomButton type='submit' text='Créer votre compte Amazon' />
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
