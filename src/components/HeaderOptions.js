import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux'
import { auth } from '../firebase/firebase'

const useStyles = makeStyles(theme => ({
  headerOptions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLink: {
    textDecoration: 'none',
    color: '#fff',
    position: 'relative',
    marginLeft: '2rem'
  },
  headerOption: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerIcon: {
    marginLeft: '2rem',
    display: 'flex',
    alignItems: 'flex-end'
  },
  headerOptionTextOne: {
    fontSize: '1.2rem',
    color: '#ccc',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    }
  },
  headerOptionTextTwo: {
    fontSize: '1.4rem',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  headerBasketCount: {
    position: 'absolute',
    top: '-.5rem',
    left: '3.2rem',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#f3a847',
    [theme.breakpoints.down('sm')]: {
      left: '2.5rem'
    }
  },
  cartIcon: {
    fontSize: '3.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  }
}))

const mapState = state => ({
  loggedUser: state.loggedUser,
  cart: state.cart.cart
})

const HeaderOptions = ({ cart, loggedUser: { user }, history }) => {
  const classes = useStyles()

  const signOut = () => {
    history.push('/')
    auth.signOut()
  }

  return (
    <div className={classes.headerOptions}>
      {!user ? (
        <Link to='/login' className={classes.headerLink}>
          <div className={classes.headerOption}>
            <span className={classes.headerOptionTextOne}>Bonjour, Identifiez-vous</span>
            <span className={classes.headerOptionTextTwo}>Se connecter</span>
          </div>
        </Link>
      ) : (
        <div className={classes.headerLink}>
          <div className={classes.headerOption}>
            <span className={classes.headerOptionTextOne}>{`Bonjour ${user.name}`}</span>
            <span onClick={signOut} style={{ cursor: 'pointer' }} className={classes.headerOptionTextTwo}>
              Se déconnecter
            </span>
          </div>
        </div>
      )}
      <Link to='/checkout/basket' className={classes.headerLink}>
        <div className={classes.headerIcon}>
          <ShoppingCartIcon className={classes.cartIcon} />
          <span className={classes.headerBasketCount}>{cart.length}</span>
          <span className={classes.headerOptionTextTwo}>Panier</span>
        </div>
      </Link>
    </div>
  )
}

export default withRouter(connect(mapState)(HeaderOptions))
