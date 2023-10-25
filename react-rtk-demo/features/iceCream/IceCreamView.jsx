import { useDispatch, useSelector } from "react-redux";
import { iceCreameActions } from "./iceCreamSlice";

const IceCreamView = () => {
  const iceCream = useSelector((state) => state.icecream.numberOfIceCreams);
  const dispatch = useDispatch()
  return (
    <>
      <h1>Number of ice-cream: {iceCream}</h1>
      <button onClick={()=> dispatch(iceCreameActions.ordered())}>Order ice-cream</button>
      <button onClick={()=> dispatch(iceCreameActions.reStocked(10))}>Restock ice-cream</button>
    </>
  );
};

export default IceCreamView;
