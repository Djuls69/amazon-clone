import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import logo from '../assets/img/amazon-logo.png'

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#232f3f',
    padding: '2rem 0'
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
  footerLink: {
    color: '#fff',
    textDecoration: 'underline'
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <div style={{ textAlign: 'center' }}>
          <img className={classes.footerLogo} src={logo} alt='Amazon Logo' />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className={classes.footerText}>
            Made with{' '}
            <span role='img' aria-label='emoticon-heart'>
              💗
            </span>{' '}
            by{' '}
            <a
              className={classes.footerLink}
              href='http://www.juliendelusseau.fr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Julien Delusseau
            </a>
          </p>
          <p className={classes.footerMuted}>
            Clone du website{' '}
            <a className={classes.footerLink} href='https://www.amazon.fr/' target='_blank' rel='noopener noreferrer'>
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
