import React from 'react'
import { makeStyles } from '@material-ui/core'
import CustomButton from './CustomButton'

const useStyles = makeStyles({
  checkoutItem: {
    display: 'flex',
    height: '21rem',
    padding: '2rem 0',
    borderBottom: '1px solid #ccc'
  },
  imageItem: {
    flex: 0.2,
    height: '100%',
    objectFit: 'contain',
    textAlign: 'left'
  },
  nameItem: {
    flex: 1,
    '& h1': {
      marginBottom: '2rem',
      fontSize: '1.7rem',
      fontWeight: 700
    }
  },
  priceItem: {
    flex: 0.2,
    textAlign: 'right'
  }
})

const CheckoutItem = ({ imageURL, name, price }) => {
  const classes = useStyles()
  return (
    <div className={classes.checkoutItem}>
      <img className={classes.imageItem} src={imageURL} alt={name} />
      <div className={classes.nameItem}>
        <h1>{name}</h1>
        <CustomButton text='Supprimer du panier' />
      </div>
      <div className={classes.priceItem}>{price}</div>
    </div>
  )
}

export default CheckoutItem
