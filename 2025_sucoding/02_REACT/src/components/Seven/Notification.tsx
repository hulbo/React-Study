import { useState } from "react";

export default function Notification() {
  const [showNotification, setIsShowNotification] = useState(true);
  const handleNotificationChange = (isShow: boolean) => {
    setIsShowNotification(isShow);
  };
  return (
    <>
      <h1>Notification Component</h1>
      {showNotification && <h1>새로운 알림이 도착했습니다.</h1>}
      {showNotification && (
        <button onClick={() => handleNotificationChange(false)}>
          알림닫기
        </button>
      )}
      {!showNotification && (
        <button onClick={() => handleNotificationChange(true)}>알림보기</button>
      )}
    </>
  );
}
