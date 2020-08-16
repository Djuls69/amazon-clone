import { ADD_TO_CART, REMOVE_TO_CART } from '../types'

const INIT_STATE = {
  cart: []
}

const addItemToCart = (cart, itemToAdd) => {
  const existing = cart.find(item => item.id === itemToAdd.id)

  if (existing) {
    return cart.map(item => (item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  return [...cart, itemToAdd]
}

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, { ...action.payload, quantity: 1 })
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}
