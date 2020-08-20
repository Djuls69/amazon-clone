import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'
import home1 from '../assets/img/home-01.jpg'
import List from '../components/List'

const useStyles = makeStyles({
  homeContainer: {
    maxWidth: 1300,
    margin: '0 auto'
  },
  homeImage: {
    width: '100%',
    position: 'relative',
    objectFit: 'contain',
    maskImage: 'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))'
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
        <img className={classes.homeImage} src={home1} alt='' />
        <List />
      </div>
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={classes.backToTop}>
        Retour en haut
      </div>
    </Fragment>
  )
}

export default Home
