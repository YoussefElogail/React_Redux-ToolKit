const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreameSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    reStocked: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  // extraReducers: {
  //   "cake/ordered": (state) => {
  //     state.numberOfIceCreams --;
  //   },
  // },

  //builder beter than up  

  extraReducers : (builder)=>{
    builder.addCase(cakeActions.ordered,(state)=>{
      state.numberOfIceCreams--
    })
  }
});

module.exports = iceCreameSlice.reducer;

module.exports.iceCreamActions = iceCreameSlice.actions;
