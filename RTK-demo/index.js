const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

const store = require("./app/store");

console.log("initialState", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())

);
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.reStocked())

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.reStocked(5))




unSubscribe()
