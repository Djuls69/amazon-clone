import { ADD_TO_CART } from '../types'

const INIT_STATE = {
  cart: []
}

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state
  }
}
