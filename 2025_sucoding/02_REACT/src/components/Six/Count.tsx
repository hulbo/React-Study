import { useReducer } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";
import counterReducer from "../../reducer/counterReducer";

export default function Count() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount((count) => count + 1);
  // };
  // const handleDecrement = () => {
  //   setCount((count) => count - 1);
  // };
  // const handleReset = () => {
  //   setCount(0);
  // };

  return (
    <>
      <CountDisplay count={count} />
      <CountButton
        countDispatch={countDispatch}
        //handleIncrement={handleIncrement}
        //handleDecrement={handleDecrement}
        //handleReset={handleReset}
      />
    </>
  );
}
