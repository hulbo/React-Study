import { useState } from "react";

export default function UseStateTest() {
  // const [name, setName] = useState<string>("jack");
  // const [age, setAge] = useState<number>(20);
  // const [gender, setGender] = useState<"male" | "female">("male");

  const [userInfo, setUserInfo] = useState({
    name: "jace",
    age: 20,
    gender: "male",
  });

  const [count, setCount] = useState(0);

  const handleUpdateUserInfo = () => {
    // setName("narara");
    // setAge(10);
    // setGender("female");
    setUserInfo((userInfo) => ({
      ...userInfo,
      name: "KKK",
      age: 40,
    }));
  };
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>name: {userInfo.name}</h1>
      <h1>age: {userInfo.age}</h1>
      <h1>gender: {userInfo.gender}</h1>
      <h1>count: {count}</h1>
      <button onClick={handleUpdateUserInfo}>updateUserInfo</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
