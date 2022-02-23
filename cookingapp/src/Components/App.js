import { useState } from "react";
import { sampleRecipes, newRecipe } from "../Data/RecipeArray";
import RecipeList from "./RecipeList";
import EditRecipe from "./EditRecipe";
import "../Css/App.css";

function App() {
  const [recipe, setRecipe] = useState(sampleRecipes);
  const [selectedRecipe, setSelectedReceipe] = useState([]);

  function handleNewRecipe() {
    setRecipe([...recipe, newRecipe]);
  }

  function handleDelete(id) {
    setRecipe(recipe.filter((e) => e.id !== id));
  }

  function handleEditRecipe(id) {
    setSelectedReceipe(recipe.filter((e) => console.log(e.name)));
  }

  //console.log(handleEditRecipe(2));

  return (
    <>
      <div className='App'>
        <RecipeList
          sampleRecipes={recipe}
          handleNewRecipe={handleNewRecipe}
          handleDelete={handleDelete}
        />
      </div>
      <div className='edit-recipe'>
        <EditRecipe />
      </div>
    </>
  );
}

export default App;
