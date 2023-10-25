import { configureStore  } from "@reduxjs/toolkit"
// import reduxLogger from "redux-logger"
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/iceCream/iceCreamSlice"
import usersReducer from "../features/user/userSlice"

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer : {
    cake : cakeReducer,
    icecream : icecreamReducer,
    user : usersReducer
  },
  // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store