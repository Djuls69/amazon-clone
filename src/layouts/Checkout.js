import React from 'react'
import CheckoutItem from '../components/CheckoutItem'
import { makeStyles, Checkbox } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'
import CustomButton from '../components/CustomButton'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  checkout: {
    padding: '3rem 2rem',
    backgroundColor: '#fff',
    display: 'flex'
  },
  checkoutItems: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginRight: '2rem'
  },
  checkoutDivider: {
    textAlign: 'right',
    '&::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: 1,
      background: '#ccc',
      marginTop: '1rem'
    }
  },
  subtotal: {
    height: '25rem',
    width: '32rem',
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column'
  },
  subtotalCopy: {
    flex: 0.5,
    padding: '1rem',
    fontSize: '1.2rem',
    lineHeight: 1.8
  },
  subtotalPrice: {
    flex: 0.5,
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    backgroundColor: '#eee',
    fontSize: '1.7rem'
  },
  subtotalCurrencyFormat: {
    fontWeight: 700
  },
  subtotalCheckbox: {
    fontSize: '1.3rem',
    display: 'block',
    margin: '1rem 0'
  }
})

const mapState = state => {
  return {
    cart: state.cart.cart
  }
}

const Checkout = ({ cart }) => {
  const classes = useStyles()

  const totalPrice = () => {
    const prices = []
    cart.map(item => prices.push(item.price * item.quantity))
    const total = prices.reduce((initVal, nextVal) => {
      return initVal + nextVal
    }, 0)
    return total
  }

  const displayItems = () => {
    if (cart.length === 0) {
      return <h1>Pas d'articles dans votre panier.</h1>
    }
    return cart.map(item => <CheckoutItem key={item.id} {...item} />)
  }

  return (
    <div className={classes.checkout}>
      <div className={classes.checkoutItems}>
        <h1>Votre panier</h1>
        <div className={classes.checkoutDivider}>
          <h3>Prix</h3>
        </div>
        {displayItems()}
      </div>
      <div className={classes.subtotal}>
        <div className={classes.subtotalCopy}>
          Votre commande est éligible à la livraison Standard gratuite en France métropolitaine. restrictions
          applicables Choisissez cette option lors de votre commande
        </div>
        <div className={classes.subtotalPrice}>
          <span>
            {`Sous-total (${cart.length} ${cart.length > 1 ? 'articles' : 'article'}):`}{' '}
            <CurrencyFormat
              className={classes.subtotalCurrencyFormat}
              value={totalPrice()}
              decimalScale={2}
              displayType={'text'}
              thousandSeparator={true}
              suffix={'€'}
            />
          </span>
          <span className={classes.subtotalCheckbox}>
            <Checkbox disableRipple size='small' color='primary' /> Commande comportant un cadeau
          </span>
          <CustomButton text='Passer la commande' />
        </div>
      </div>
    </div>
  )
}

export default connect(mapState)(Checkout)
