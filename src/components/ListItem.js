import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import { makeStyles, Paper } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  itemPaper: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: '0 auto'
    }
  },
  itemImageContainer: {
    background: '#fff',
    marginBottom: '2rem',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: 0
    }
  },
  itemImage: {
    height: '25rem',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      height: '50%',
      objectFit: 'contain'
    }
  },
  itemBody: {
    height: '14rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#FAFAFA',
    [theme.breakpoints.down('sm')]: {
      height: '15rem'
    }
  },
  itemStars: {
    color: '#f3a847',
    fontSize: '1.6rem'
  },
  itemPrice: {
    fontSize: '2.1rem',
    fontWeight: 600
  },
  itemDescription: {
    fontSize: '1.3rem',
    fontWeight: 400
  }
}))

const mapState = state => ({
  user: state.loggedUser.user,
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
})

const ListItem = ({ item, addToCart, user }) => {
  const { imageURL, price, name, rating } = item
  const classes = useStyles()

  return (
    <Paper className={classes.itemPaper}>
      <div className={classes.itemImageContainer}>
        <img className={classes.itemImage} src={imageURL} alt={name} />
      </div>
      <div className={classes.itemBody}>
        <CurrencyFormat
          className={classes.itemPrice}
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'€'}
        />
        <p className={classes.itemDescription}>{name}</p>
        <span>
          {new Array(rating).fill().map((star, idx) => (
            <StarIcon key={idx} className={classes.itemStars} />
          ))}
        </span>
        <CustomButton text='Ajouter au panier' onClick={() => addToCart(item)} />
      </div>
    </Paper>
  )
}

export default connect(mapState, mapDispatch)(ListItem)
