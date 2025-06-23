export default function ButtonTest({
  children,
  handleClick,
  message,
}: {
  children: React.ReactNode;
  handleClick: (message: string) => void;
  message: string;
}) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
