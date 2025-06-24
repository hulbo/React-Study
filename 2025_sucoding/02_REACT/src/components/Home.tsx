// import ButtonEvent from "./Five/ButtonEvent";
// import ButtonEventDom from "./Five/ButtonEventDom";
// import ButtonTest from "./Five/ButtonTest";
// import Table from "./Five/Table";
// import DataTypePring from "./Four/DataTypePring";
// import RefDataTypePring from "./Four/RefDataTypePring";

import { useReducer } from "react";
import Count from "./Six/Count";
import UseStateTest from "./Six/UseStateTest";
import counterReducer from "../reducer/counterReducer";
export default function Home() {
  // const handleClick = (message: string) => alert(message);
  // const handleClick2 = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   message: string
  // ) => {
  //   console.log(event);
  //   console.log(message);
  //   event.currentTarget.innerText = message;
  // };

  const [count, countDispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <h1>Home Component</h1>
      {/* <UseStateTest /> */}
      <Count />
      {/* <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button> */}
      {/* 5강
      <ButtonEventDom handleClick={handleClick2} title={"버튼명을 입력해라"} />
      <Table />
      <ButtonTest handleClick={handleClick} message={"테스트를 진행한다 111"}>
        TEST BUTTON
      </ButtonTest>
      <ButtonTest handleClick={handleClick} message={"울라라라라다다다다"}>
        TEST BUTTON 22222
      </ButtonTest>
       */}
      {/* <DataTypePring /> */}
      {/* <RefDataTypePring /> */}
      {/* <ButtonEvent message="Playing!!!">Play Movie</ButtonEvent>
      <ButtonEvent message="Uploading">Upload Image</ButtonEvent> */}
      {/* <ButtonEvent handleClick={handleClick} message="Playing!!!">
        Play Movie
      </ButtonEvent>
      <ButtonEvent
        handleClick={(message: string) => alert(message)}
        message="울라라 둘라라"
      >
        울라라 둘라라
      </ButtonEvent> */}
    </>
  );
}
