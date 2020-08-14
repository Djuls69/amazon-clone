import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  itemButton: {
    padding: '0.6rem',
    border: '1px solid',
    borderColor: '#a88734 #9c7e31 #846a29',
    borderRadius: 2,
    cursor: 'pointer'
  },
  itemButtonOrange: {
    backgroundColor: '#f3cf77',
    '&:hover': {
      backgroundColor: '#f0c350'
    }
  },
  itemButtonGrey: {
    backgroundColor: '#eff0f2',
    '&:hover': {
      backgroundColor: '#dfe2e7'
    }
  },
  itemButtonText: {
    color: '#2f3841',
    fontSize: '1.3rem',
    fontWeight: 500
  }
})

const CustomButton = ({ text, secondary, ...otherProps }) => {
  const classes = useStyles()
  return (
    <button
      {...otherProps}
      className={`${classes.itemButton} ${secondary ? classes.itemButtonGrey : classes.itemButtonOrange}`}
    >
      <span className={classes.itemButtonText}>{text}</span>
    </button>
  )
}

export default CustomButton
