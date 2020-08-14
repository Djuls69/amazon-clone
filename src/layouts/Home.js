import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import home1 from '../assets/img/home-01.jpg'
import List from '../components/List'

const useStyles = makeStyles({
  homeImage: {
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
    zIndex: '-100000',
    width: '100%',
    objectFit: 'contain',
    position: 'relative'
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='lg'>
      <div className={classes.homeImage}>
        <img src={home1} alt='' />
      </div>
      <List />
    </Container>
  )
}

export default Home
