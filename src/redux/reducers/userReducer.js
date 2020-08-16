import { SIGNIN_USER } from '../types'

const INIT_STATE = {
  user: null
}

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
