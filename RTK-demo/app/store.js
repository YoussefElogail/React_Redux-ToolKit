const configureStore = require("@reduxjs/toolkit").configureStore

const { getDefaultMiddleware } = require("@reduxjs/toolkit")
const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/iceCream/iceCreamSlice")
const usersReducer = require("../features/user/userSlice")

const reduxLogger = require("redux-logger")

const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer : {
    cake : cakeReducer,
    icecream : icecreamReducer,
    users : usersReducer
  },
  // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

module.exports = store