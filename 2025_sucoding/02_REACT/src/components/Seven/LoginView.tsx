import { useState } from "react";

export default function LoginView() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginBtnClick = () => {
    setIsLoggedIn((isLoggedIn) => {
      return !isLoggedIn;
    });
  };

  return (
    <>
      <h1>{isLoggedIn ? "환영합니다." : "로그인이 필요합니다."}</h1>
      <button onClick={handleLoginBtnClick}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </>
  );
}
