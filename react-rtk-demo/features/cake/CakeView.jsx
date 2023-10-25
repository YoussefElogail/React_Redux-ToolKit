import { useSelector } from "react-redux";

const CakeView = () => {
  const cake = useSelector((state) => state.cake.numberOfCakes);

  return (
    <>
      <h1>Number of cakes: {cake}</h1>
      <button>Order cake</button>
      <button>Restock cake</button>
    </>
  );
};

export default CakeView;
