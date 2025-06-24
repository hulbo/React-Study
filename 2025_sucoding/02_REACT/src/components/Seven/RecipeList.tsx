import { useState } from "react";
import RecipeView from "./RecipeView";
import { initialRecipes } from "../../data/initialData";

export default function RecipeList() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const handleRecipeDelete = (id: string) => {
    setRecipes((recipe) => recipe.filter((item) => item.id !== id));
  };

  return (
    <>
      <ul>
        {recipes.map((recipe) => (
          //<RecipeView recipe={recipe} handleRecipeDelete={handleRecipeDelete} />
          <RecipeView
            key={recipe.id}
            {...recipe}
            handleRecipeDelete={handleRecipeDelete}
          />
        ))}
      </ul>
    </>
  );
}
