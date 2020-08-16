import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  itemButton: {
    padding: '0.6rem',
    border: '1px solid',
    borderColor: '#a88734 #9c7e31 #846a29',
    borderRadius: 2,
    cursor: 'pointer',
    display: 'block',
    color: '#2f3841',
    fontSize: '1.3rem',
    fontWeight: 500
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
  itemButtonGoogle: {
    color: '#fff',
    fontWeight: 600,
    backgroundColor: '#4185f4',
    '&:hover': {
      backgroundColor: '#415eae'
    }
  }
})

const CustomButton = ({ text, secondary, isGoogle, ...otherProps }) => {
  const classes = useStyles()
  const changeClasses = () => {
    if (secondary) {
      return `${classes.itemButton} ${classes.itemButtonGrey}`
    } else if (isGoogle) {
      return `${classes.itemButton} ${classes.itemButtonGoogle}`
    }
    return `${classes.itemButton} ${classes.itemButtonOrange}`
  }
  return (
    <button {...otherProps} className={changeClasses()}>
      <span>{text}</span>
    </button>
  )
}

export default CustomButton
