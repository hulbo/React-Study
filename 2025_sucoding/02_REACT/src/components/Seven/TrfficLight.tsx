export default function TrfficLight({
  light,
  handleChangeLight,
}: {
  light: string;
  handleChangeLight: () => void;
}) {
  return (
    <>
      <h1>light : {light.toLocaleUpperCase()}</h1>
      <button onClick={handleChangeLight}>색상전환</button>
    </>
  );
}
