export default function ButtonEventDom({
  handleClick,
  title,
}: {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => void;
  title: string;
}) {
  // const handleClick = (
  //   message: string,
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   console.log(message);
  //   console.log(event);
  // };
  // const handleClick2 = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   console.log(event);
  // };
  return (
    <>
      <button onClick={(event) => handleClick(event, title)}>클릭</button>
      {/* <button onClick={handleClick2}>클릭</button> */}
    </>
  );
}
