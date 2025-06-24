import type { ActionDispatch } from "react";

export default function CountButton({
  countDispatch,
}: {
  countDispatch: ActionDispatch<[action: { type: string }]>;
}) {
  return (
    <>
      {/* <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
      <button onClick={handleReset}>초기화</button> */}
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>초기화</button>
    </>
  );
}
