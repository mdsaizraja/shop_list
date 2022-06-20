import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './reducer/shopReducer'


export const store = configureStore({reducer: shopReducer})

store.dispatch({
  type: 'ADD_SHOP',
  text: 'Read the docs'
})

console.log(store.getState())

