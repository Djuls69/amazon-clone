import React from 'react'
import { makeStyles } from '@material-ui/core'
import CustomButton from '../components/CustomButton'
import logo2 from '../assets/img/amazon-logo2.png'

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
    fontSize: '1.2rem',
    textAlign: 'center',
    position: 'relative',
    marginBottom: '2rem'
  }
})

const Login = ({ history }) => {
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
          <h1 className={classes.loginTitle}>S'identifier</h1>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Adresse e-email</label>
            <input type='email' />
          </div>
          <div className={classes.inputForm}>
            <label className={classes.loginLabel}>Mot de passe</label>
            <input type='password' />
          </div>
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
