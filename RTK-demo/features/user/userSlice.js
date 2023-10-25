const createSlice = require("@reduxjs/toolkit").createSlice
const axios = require("axios")
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk

const initialState = {
  loading : true ,
  data : [] ,
  error : ""
}

// fetchUsers = createAsyncThunk() Generat pending , fulfilled , rejected actions types 

const fetchUsers = createAsyncThunk("user/fetchUsers",() => 
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=> res.data.map((user)=> user.id))
)

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers : (builder) => {
    builder.addCase(fetchUsers.pending,(state) => {
      return state
    })
    builder.addCase(fetchUsers.fulfilled,(state , action) => {
      state.loading = false 
      state.data = action.payload
      state.error = ""
    })
    builder.addCase(fetchUsers.rejected,(state , action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
    })
  }
})

module.exports = userSlice.reducer

module.exports.fetchUsers = fetchUsers