import React from 'react'
import amazonLogo from '../assets/img/amazon-logo.png'
import { makeStyles } from '@material-ui/core'
import SearchBar from '../components/SearchBar'
import HeaderOptions from '../components/HeaderOptions'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  header: {
    width: '100%',
    background: '#131921',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    paddingRight: '2rem',
    position: 'sticky',
    top: 0,
    zIndex: 10000
  },
  headerLogoLink: {
    width: '14rem',
    [theme.breakpoints.down('sm')]: {
      width: '5rem'
    }
  },
  headerLogo: {
    width: '100%',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: '70%'
    }
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <nav className={classes.header}>
      <Link to='/' className={classes.headerLogoLink}>
        <img className={classes.headerLogo} src={amazonLogo} alt='Amazon Logo' />
      </Link>
      <SearchBar />
      <HeaderOptions />
    </nav>
  )
}

export default Header
