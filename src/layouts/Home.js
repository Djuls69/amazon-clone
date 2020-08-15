import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'
import home1 from '../assets/img/home-01.jpg'
import List from '../components/List'

const useStyles = makeStyles({
  homeContainer: {
    maxWidth: 1500,
    margin: '0 auto'
  },
  homeImage: {
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
    zIndex: '-100000',
    width: '100%',
    objectFit: 'contain',
    position: 'relative'
  },
  backToTop: {
    height: '5rem',
    backgroundColor: '#364759',
    color: '#fff',
    fontSize: '1.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#48576a'
    }
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className={classes.homeContainer}>
        <div className={classes.homeImage}>
          <img src={home1} alt='' />
        </div>
        <List />
      </div>
      <div onClick={() => window.scrollTo(0, 0)} className={classes.backToTop}>
        Retour en haut
      </div>
    </Fragment>
  )
}

export default Home
