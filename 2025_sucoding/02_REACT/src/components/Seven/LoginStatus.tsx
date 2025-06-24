export default function LoginStatus({
  isLoggedIn,
  handleLogIn,
  handleLogOut,
}: {
  isLoggedIn: boolean;
  handleLogIn: () => void;
  handleLogOut: () => void;
}) {
  if (isLoggedIn) {
    return (
      <>
        <h1>환영합니다.</h1>
        <button onClick={handleLogOut}>로그아웃</button>
      </>
    );
  } else {
    return (
      <>
        <h1>로그인필요합니다.</h1>
        <button onClick={handleLogIn}>로그인</button>
      </>
    );
  }
}
