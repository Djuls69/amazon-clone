import { makeStyles } from '@material-ui/core'

export const loginStyles = makeStyles({
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
    marginBottom: '2rem',
    '& input': {
      height: '3rem',
      borderRadius: 3,
      border: '1px solid #aaa',
      fontSize: '1.4rem',
      padding: '0 1rem',
      '&:focus': {
        outlineColor: 'orange'
      }
    }
  },
  divider: {
    color: '#767676',
    fontSize: '1.3rem',
    textAlign: 'center',
    position: 'relative',
    marginBottom: '2rem'
  }
})
