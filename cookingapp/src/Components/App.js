import { useState, useEffect } from "react";
import { sampleRecipes, newRecipe } from "../Data/RecipeArray";
import RecipeList from "./RecipeList";
import EditRecipe from "./EditRecipe";
import "../Css/App.css";

function App() {
  const ALL_RECIPES = "ALL-RECIPES";
  const [selectedRecipeId, setSelectedReceipeId] = useState();
  const [recipe, setRecipe] = useState(sampleRecipes);
  const selectedRecipe = recipe.find((e) => e.id === selectedRecipeId);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(ALL_RECIPES);
    recipeJSON && setRecipe(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(ALL_RECIPES, JSON.stringify(recipe));
  }, [recipe]);

  function handleNewRecipe() {
    setRecipe([...recipe, newRecipe]);
    setSelectedReceipeId(newRecipe.id);
  }

  function handleDelete(id) {
    setRecipe(recipe.filter((e) => e.id !== id));
  }

  function handleEditRecipe(id) {
    setSelectedReceipeId(id);
  }

  function handleUpdateRecipes(id, updatedRecipe) {
    const DuplicateReceipe = [...recipe];
    const index = DuplicateReceipe.findIndex((e) => e.id === id);
    DuplicateReceipe[index] = updatedRecipe;
    setRecipe(DuplicateReceipe);
  }

  return (
    <>
      <div className='App'>
        <RecipeList
          sampleRecipes={recipe}
          handleNewRecipe={handleNewRecipe}
          handleDelete={handleDelete}
          handleEditRecipe={handleEditRecipe}
        />
      </div>
      <div className='edit-recipe'>
        {selectedRecipe && (
          <EditRecipe
            selectedRecipe={selectedRecipe}
            handleUpdateRecipes={handleUpdateRecipes}
            handleEditRecipe={handleEditRecipe}
          />
        )}
      </div>
    </>
  );
}

export default App;
