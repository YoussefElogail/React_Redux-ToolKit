const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numberOfIceCreams : 20
}

const iceCreameSlice = createSlice({
  name : "icecream",
  initialState,
  reducers : {
    ordered : (state) => {
      state.numberOfIceCreams --
    },
    reStocked : (state , action) => {
      state.numberOfIceCreams += action.payload
    }
  }
})

module.exports = iceCreameSlice.reducer

module.exports.iceCreamActions = iceCreameSlice.actions