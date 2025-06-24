export default function RecipeView({
  id,
  name,
  ingredients,
  handleRecipeDelete,
}: {
  id: string;
  name: string;
  ingredients: string[];
  handleRecipeDelete: (id: string) => void;
}) {
  return (
    <>
      <li key={id}>
        <h4>{name}</h4>
        {ingredients.map((value, index) => (
          <h5 key={index}>{value}</h5>
        ))}
        <button onClick={() => handleRecipeDelete(id)}>삭제</button>
      </li>
    </>
  );
}
