import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";
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

export default iceCreameSlice.reducer

export const iceCreameActions = iceCreameSlice.actions
