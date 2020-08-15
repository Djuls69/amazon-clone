import { SIGNIN_USER } from '../types'

export const signinUser = user => ({
  type: SIGNIN_USER,
  payload: user
})
