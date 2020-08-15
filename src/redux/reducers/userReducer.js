import { SIGNIN_USER, ADD_TO_CART } from '../types'

const INIT_STATE = {
  user: {
    id: '',
    name: '',
    email: '',
    basket: []
  }
}

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        user: action.payload
      }
    case ADD_TO_CART:
      return {
        ...state,
        user: { ...state.user, basket: [...state.user.basket, action.payload] }
      }
    default:
      return state
  }
}
