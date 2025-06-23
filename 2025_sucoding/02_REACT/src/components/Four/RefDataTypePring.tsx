export default function RefDataTypePring() {
  // 참조 자료형 예제
  const referenceArray = [1, 2, 3, 4];
  const referenceObject = { name: "John", age: 30 };
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  return (
    <>
      <h1>RefDataTypePring Component</h1>
      <p>배열: {referenceArray}</p>
      <p>객체: {JSON.stringify(referenceObject)}</p>
      <p>함수: {referenceFunction.toString()}</p>
      <p>객체: {referenceDate.toString()}</p>
      <p>정규식: {String(referenceRegExp)}</p>
      <p>Map: {JSON.stringify(Array.from(referenceMap))}</p>
      <p>Set: {JSON.stringify(Array.from(referenceSet))}</p>
    </>
  );
}
