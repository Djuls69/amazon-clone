import { SIGNIN_USER, ADD_TO_CART, REMOVE_TO_CART } from '../types'

export const signinUser = user => ({
  type: SIGNIN_USER,
  payload: user
})

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
})

export const removeToCart = id => ({
  type: REMOVE_TO_CART,
  payload: id
})
