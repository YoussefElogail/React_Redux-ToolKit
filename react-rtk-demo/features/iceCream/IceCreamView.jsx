import { useSelector } from "react-redux";

const IceCreamView = () => {
  const iceCream = useSelector((state) => state.icecream.numberOfIceCreams);

  return (
    <>
      <h1>Number of ice-cream: {iceCream}</h1>
      <button>Order ice-cream</button>
      <button>Restock ice-cream</button>
    </>
  );
};

export default IceCreamView;
