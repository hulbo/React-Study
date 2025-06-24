export default function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    return (
      <>
        <h1>11111111111111111111</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>22222222222222222222</h1>
      </>
    );
  }
}
