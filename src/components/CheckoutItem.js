import React from 'react'
import { makeStyles } from '@material-ui/core'
import CustomButton from './CustomButton'
import { removeToCart } from '../redux/actions'
import { connect } from 'react-redux'
import CurrencyFormat from 'react-currency-format'

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
    minWidth: '35rem',
    '& h1': {
      fontSize: '1.7rem',
      fontWeight: 700,
      marginBottom: '1rem'
    }
  },
  priceItem: {
    flex: 0.2,
    textAlign: 'right',
    fontSize: '1.7rem',
    fontWeight: 700
  },
  priceQuantity: {
    fontSize: '1.2rem',
    marginBottom: '2rem'
  }
})

const mapDispatch = dispatch => ({
  removeItem: id => dispatch(removeToCart(id))
})

const CheckoutItem = ({ id, imageURL, name, quantity, price, removeItem }) => {
  const classes = useStyles()
  return (
    <div className={classes.checkoutItem}>
      <img className={classes.imageItem} src={imageURL} alt={name} />
      <div className={classes.nameItem}>
        <h1>{name}</h1>
        <p className={classes.priceQuantity}>
          Quantité: <b>{quantity}</b>
        </p>
        <CustomButton text='Supprimer du panier' onClick={() => removeItem(id)} />
      </div>
      <div className={classes.priceItem}>
        <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} suffix={'€'} />
      </div>
    </div>
  )
}

export default connect(null, mapDispatch)(CheckoutItem)
