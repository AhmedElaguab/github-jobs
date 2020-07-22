import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const store = configureStore({ reducer: rootReducer })

<<<<<<< HEAD
export type AppDispatch = typeof store.dispatch

=======
>>>>>>> 08885912f5e0cfb400177c288262bcf6f39df90b
export default store
