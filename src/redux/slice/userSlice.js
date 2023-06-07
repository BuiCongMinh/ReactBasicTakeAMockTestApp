import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    account: {},
    isAuthenticated: false
  },
  reducers: {
    setUser: (state, action) => {
      state.account = action.payload;
      state.isAuthenticated = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer