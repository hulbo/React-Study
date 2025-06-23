import ButtonEvent from "./Five/ButtonEvent";
import ButtonEventDom from "./Five/ButtonEventDom";
import ButtonTest from "./Five/ButtonTest";
import Table from "./Five/Table";
import DataTypePring from "./Four/DataTypePring";
import RefDataTypePring from "./Four/RefDataTypePring";

export default function Home() {
  const handleClick = (message: string) => alert(message);
  const handleClick2 = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => {
    console.log(event);
    console.log(message);
    event.currentTarget.innerText = message;
  };
  return (
    <>
      <h1>Home Component</h1>
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
      <ButtonEventDom handleClick={handleClick2} title={"버튼명을 입력해라"} />
      <Table />
      <ButtonTest handleClick={handleClick} message={"테스트를 진행한다 111"}>
        TEST BUTTON
      </ButtonTest>
      <ButtonTest handleClick={handleClick} message={"울라라라라다다다다"}>
        TEST BUTTON 22222
      </ButtonTest>
    </>
  );
}
