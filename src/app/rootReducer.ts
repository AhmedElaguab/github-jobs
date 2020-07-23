import { combineReducers } from '@reduxjs/toolkit'

import searchReducer from '../features/searchJobs/searchSlice'

const rootReducer = combineReducers({ search: searchReducer })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
