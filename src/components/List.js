import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { data } from '../data/data'
import ListItem from './ListItem'

const useStyles = makeStyles({
  homeList: {
    zIndex: '100',
    marginTop: '-25rem',
    padding: '2rem',
    '& a': {
      textDecoration: 'none'
    }
  },
  homeGridItem: {
    zIndex: 10
  }
})

const List = () => {
  const classes = useStyles()
  return (
    <div className={classes.homeList}>
      <Grid container spacing={3}>
        {data.map(item => (
          <Grid key={item.id} className={classes.homeGridItem} item xs={6} md={3}>
            <ListItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
