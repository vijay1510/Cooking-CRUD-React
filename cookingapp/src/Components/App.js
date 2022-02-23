import { useState } from "react";
import { sampleRecipes, newRecipe } from "../Data/RecipeArray";
import RecipeList from "./RecipeList";
import "../Css/App.css";

function App() {
  const [recipe, setRecipe] = useState(sampleRecipes);

  function handleNewRecipe() {
    setRecipe([...recipe, newRecipe]);
  }

  function handleDelete(id) {
    setRecipe(recipe.filter((e) => e.id !== id));
  }

  return (
    <div className='App'>
      <RecipeList
        sampleRecipes={recipe}
        handleNewRecipe={handleNewRecipe}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
