import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux'
import { auth } from '../firebase/firebase'

const useStyles = makeStyles({
  headerOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    color: '#ccc'
  },
  headerOptionTextTwo: {
    fontSize: '1.4rem',
    fontWeight: 700
  },
  headerBasketCount: {
    position: 'absolute',
    top: '-.5rem',
    left: '3.2rem',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#f3a847'
  }
})

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
      <Link to='#!' className={classes.headerLink}>
        <div className={classes.headerOption}>
          <span className={classes.headerOptionTextOne}>Retour</span>
          <span className={classes.headerOptionTextTwo}>et Commandes</span>
        </div>
      </Link>
      <Link to='#!' className={classes.headerLink}>
        <div className={classes.headerOption}>
          <span className={classes.headerOptionTextOne}>Testez</span>
          <span className={classes.headerOptionTextTwo}>Prime</span>
        </div>
      </Link>
      <Link to={user ? `/checkout/${user.id}/basket` : '#!'} className={classes.headerLink}>
        <div className={classes.headerIcon}>
          <ShoppingCartIcon style={{ fontSize: '3.2rem' }} />
          <span className={classes.headerBasketCount}>{cart.length}</span>
          <span className={classes.headerOptionTextTwo}>Panier</span>
        </div>
      </Link>
    </div>
  )
}

export default withRouter(connect(mapState)(HeaderOptions))
