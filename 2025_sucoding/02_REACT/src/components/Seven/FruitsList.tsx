import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function FruitsList() {
  // const fruits = ["사과", "바나나", "오렌지"];
  // for (let i = 0; i < fruits.length; i++) {
  //   item.push(<li key={i}>{fruits[i]}</li>);
  // }
  const items = ["사과", "바나나", "오렌지"];
  const [fruits, setFruits] = useState(() =>
    items.map((item) => ({
      id: uuidv4(),
      value: item,
    }))
  );
  const isGrapeAdded = fruits.some((fruit) => fruit.value === "포도");

  const handleFruitsAdd = (newFruits: string) => {
    setFruits((fruits) => [...fruits, { id: uuidv4(), value: newFruits }]);
  };

  return (
    <>
      <h1>과일목록</h1>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <input type="text" placeholder={fruit.value} />
        </li>
      ))}
      <button onClick={() => handleFruitsAdd("포도")} disabled={isGrapeAdded}>
        과일추가
      </button>
    </>
  );
}
