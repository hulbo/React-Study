export default function ButtonEvent({
  children,
  message,
  handleClick,
}: {
  children: React.ReactNode;
  message: string;
  handleClick: (message: string) => void;
}) {
  // const handleClick = () => alert(message);
  return (
    <>
      {/* <button onClick={() => handleClick("Hello")}>클릭</button> */}
      {/* <button onClick={() => alert()}>클릭</button> */}
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
