import classNames from "classnames/bind";
import styles from "./Style01.module.css";

export default function Style01() {
  const cx = classNames.bind(styles);
  const isLoggedIn = false;
  return (
    <>
      <h1>Style01 Component</h1>
      <button className={cx("btn", "is-active")}>버튼</button>
      <button className={cx("btn")}>버튼</button>
      <button className={cx("btn", { "is-active": isLoggedIn })}>테스트</button>
    </>
  );
}
