import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
  const cake = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch()
  return (
    <>
      <h1>Number of cakes: {cake}</h1>
      <button onClick={()=> dispatch(cakeActions.ordered())}>Order cake</button>
      <button onClick={()=> dispatch(cakeActions.reStocked(10))}>Restock cake</button>
    </>
  );
};

export default CakeView;
