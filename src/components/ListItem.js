import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import { makeStyles, Paper } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'

const useStyles = makeStyles({
  itemImageContainer: {
    background: '#fff',
    marginBottom: '2rem',
    padding: '1rem'
  },
  itemImage: {
    height: '25rem',
    objectFit: 'contain'
  },
  itemBody: {
    height: '14rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#FAFAFA'
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
  },
  itemButton: {
    padding: '0.6rem',
    backgroundColor: '#f0c14d',
    border: '1px solid #2f3841',
    borderRadius: 2,
    cursor: 'pointer'
  },
  itemButtonText: {
    color: '#2f3841',
    flex: 1
  }
})

const ListItem = ({ imageURL, price, name, rating }) => {
  const classes = useStyles()
  return (
    <Paper>
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
        <button className={classes.itemButton}>
          <span className={classes.itemButtonText}>Ajouter au panier</span>
        </button>
      </div>
    </Paper>
  )
}

export default ListItem
