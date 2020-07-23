import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: { description: 'react', location: 'New York' },
  reducers: {
    setDescription(state, action) {
      state.description = action.payload
    },
    setLocation(state, action) {
      state.location = action.payload
    },
  },
})

export const { setDescription, setLocation } = searchSlice.actions
export default searchSlice.reducer
