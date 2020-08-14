import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import logo from '../assets/img/amazon-logo.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#232f3f',
    padding: '2rem 0'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      textAlign: 'center'
    }
  },
  footerLogo: {
    width: '8rem',
    marginBottom: '2rem'
  },
  footerText: {
    color: '#fff',
    fontSize: '1.6rem'
  },
  footerMuted: {
    color: '#ccc',
    fontSize: '1.4rem'
  },
  footerLinks: {
    color: '#fff',
    fontSize: '1.4rem',
    textDecoration: 'none',
    margin: '0 1rem',
    marginBottom: '3rem',
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  footerLinkHref: {
    color: '#fff',
    textDecoration: 'underline'
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg' className={classes.footerContainer}>
        <img className={classes.footerLogo} src={logo} alt='Amazon Logo' />
        <div>
          <Link to='#!' className={classes.footerLinks}>
            Conditions d'utilisation
          </Link>
          <Link to='#!' className={classes.footerLinks}>
            Protection de vos informations personnelles
          </Link>
          <Link to='#!' className={classes.footerLinks}>
            Aide
          </Link>
          <Link to='#!' className={classes.footerLinks}>
            Cookies
          </Link>
          <Link to='#!' className={classes.footerLinks}>
            Annonces basées sur vos centres d'intérêt
          </Link>
        </div>
        <div>
          <p className={classes.footerText}>
            Made with{' '}
            <span role='img' aria-label='emoticon-heart'>
              💗
            </span>{' '}
            by{' '}
            <a
              className={classes.footerLinkHref}
              href='http://www.juliendelusseau.fr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Julien Delusseau
            </a>
          </p>
          <p className={classes.footerMuted}>
            Clone du website{' '}
            <a
              className={classes.footerLinkHref}
              href='https://www.amazon.fr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Amazon
            </a>{' '}
            - Projet personnel à but non lucratif
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
