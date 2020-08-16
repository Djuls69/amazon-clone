import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { cartReducer } from './cartReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const allReducers = combineReducers({
  loggedUser: userReducer,
  cart: cartReducer
})

export const persistedReducer = persistReducer(persistConfig, allReducers)
