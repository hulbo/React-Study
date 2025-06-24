import { useState } from "react";

export default function FillerList() {
  // 초기 데이터를 설정합니다.
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Tomato", category: "Vegetable" },
  ]);

  const fillterItems = items.filter(({ category }) => category === "Fruit");

  const handleDelete = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h1>1111</h1>
      <ul>
        {items
          //.filter(({ category }) => category === "Fruit")
          .map((item) => (
            <li key={item.id}>
              {item.category} :{item.name}:
              <button onClick={() => handleDelete(item.id)}>삭제</button>
            </li>
          ))}
      </ul>
      <h1>1111</h1>
      <ul>
        {fillterItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
