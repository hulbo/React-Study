// import ButtonEvent from "./Five/ButtonEvent";
// import ButtonEventDom from "./Five/ButtonEventDom";
// import ButtonTest from "./Five/ButtonTest";
// import Table from "./Five/Table";
// import DataTypePring from "./Four/DataTypePring";
// import RefDataTypePring from "./Four/RefDataTypePring";

import { useReducer, useState } from "react";
import Count from "./Six/Count";
import UseStateTest from "./Six/UseStateTest";
import counterReducer from "../reducer/counterReducer";
import Greeting from "./Seven/Greeting";
import LoginStatus from "./Seven/LoginStatus";
import StatusMessage from "./Seven/StatusMessage";
import TrfficLight from "./Seven/TrfficLight";
import LoginView from "./Seven/LoginView";
import Notification from "./Seven/Notification";
import FruitsList from "./Seven/FruitsList";
import FillerList from "./Seven/FillerList";
import RecipeList from "./Seven/RecipeList";
import Style01 from "./Eight/Style01";
import ButtonGroup from "./Eight/ButtonGroup";
import { initialButtons } from "../data/initialData";
import styled, { keyframes, css } from "styled-components";
import TrafficLightComponent from "./Eight/TrafficLightComponent";

const boxShadowMixin = css`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1<{ $color: string }>`
  color: ${(props) => props.$color};
  text-decoration: underline;
  &:hover {
    color: pink;
  }
`;
const BigTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSize.normal};
`;

const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid red;
`;
const BlueBorderWrapper = styled(Wrapper)<{ $shadow: boolean }>`
  border-color: ${(props) => props.theme.colors.primary};
  ${(props) => props.$shadow && boxShadowMixin};
`;

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
  // 6강
  //const [count, countDispatch] = useReducer(counterReducer, 0);
  // 7강
  //const isLoggedIn = true;
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // const handleLogIn = () => setIsLoggedIn(true);
  // const handleLogOut = () => setIsLoggedIn(false);
  // const [light, setLight] = useState("red");
  // const handleChangeLight = () => {
  //   setLight((light) => {
  //     switch (light) {
  //       case "red":
  //         return "yellow";
  //       case "yellow":
  //         return "green";
  //       case "green":
  //         return "red";
  //       default:
  //         return "red";
  //     }
  //   });
  // };
  const isLoggedIn = true;

  return (
    <>
      <TrafficLightComponent />
      {/*       
      <BlueBorderWrapper $shadow>
        <Wrapper>
          <Title
            $color="red"
            as="p"
            title="111111111111"
            onClick={() => alert("111")}
          >
            P테그로 변경 해봄 AS
          </Title>
          <Title $color="red">Home Component</Title>
          <BigTitle $color="blue">TEST</BigTitle>
        </Wrapper>
      </BlueBorderWrapper> */}
      {/* <ButtonGroup initialButtons={initialButtons} /> */}
      {/* <Style01 /> */}

      {/* 7강 
      <RecipeList /> */}
      {/* <FillerList /> */}
      {/* <FruitsList /> */}
      {/* <Notification /> */}
      {/* {isLoggedIn && <h1>안녕하세요!!!</h1>}
      {!isLoggedIn && <h1>우라랄라라@@@</h1>} */}
      {/* <LoginView /> */}
      {/* <h1>{isLoggedIn ? "오키도코" : "로그인안됨"}</h1> */}
      {/* <TrfficLight light={light} handleChangeLight={handleChangeLight} /> */}
      {/* <button onClick={(light) => handleLightClick}>번튼작동</button> */}
      {/* <StatusMessage /> */}
      {/* <LoginStatus
        isLoggedIn={isLoggedIn}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      /> */}
      {/* <Greeting isLoggedIn={isLoggedIn} /> */}
      {/* 6강 <UseStateTest /> */}
      {/* <Count /> */}
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
