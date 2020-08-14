import React from 'react'
import amazonLogo from '../assets/img/amazon-logo.png'
import { makeStyles } from '@material-ui/core'
import SearchBar from '../components/SearchBar'
import HeaderOptions from '../components/HeaderOptions'

const useStyles = makeStyles({
  header: {
    height: '6rem',
    background: '#131921',
    display: 'flex',
    padding: '1rem',
    paddingRight: '2rem',
    position: 'sticky',
    top: 0,
    zIndex: 10000
  },
  headerLogo: {
    height: '100%',
    objectFit: 'contain'
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <nav className={classes.header}>
      <img className={classes.headerLogo} src={amazonLogo} alt='Amazon Logo' />
      <SearchBar />
      <HeaderOptions />
    </nav>
  )
}

export default Header
