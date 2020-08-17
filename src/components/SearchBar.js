import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  searchbar: {
    marginLeft: '7rem',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0.5rem'
    }
  },
  searchbarInput: {
    height: '100%',
    width: '100%',
    border: 'none',
    borderRadius: '3px 0 0 3px',
    fontSize: '1.6rem',
    fontWeight: 400,
    padding: '0 1rem',
    '&:focus': {
      outline: 'none'
    }
  },
  searchbarButton: {
    height: '100%',
    width: '4.5rem',
    border: 'none',
    borderRadius: '0 3px 3px 0',
    backgroundColor: '#f3a847',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none'
    }
  },
  searchbarIcon: {
    fontSize: '3rem'
  }
}))

const SearchBar = () => {
  const classes = useStyles()
  return (
    <div className={classes.searchbar}>
      <input className={classes.searchbarInput} type='text' />
      <button className={classes.searchbarButton}>
        <SearchIcon className={classes.searchbarIcon} />
      </button>
    </div>
  )
}

export default SearchBar
