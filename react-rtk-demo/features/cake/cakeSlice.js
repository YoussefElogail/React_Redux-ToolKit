import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  numberOfCakes : 10
}
const cakeSlice = createSlice({
  name : "cake",
  initialState  ,
  reducers : {
    ordered : (state ) => {
      state.numberOfCakes --
    },
    reStocked : (state , {payload = 1}) => {
      state.numberOfCakes += payload
    }
  }
})

export default cakeSlice.reducer

export const cakeActions = cakeSlice.actions

