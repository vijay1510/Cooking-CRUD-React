import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({
  sampleRecipes,
  handleNewRecipe,
  handleDelete,
}) {
  return (
    <div className='receipe-list'>
      <div>
        {sampleRecipes.map((recipe) => {
          return (
            <Recipe key={recipe.id} {...recipe} handleDelete={handleDelete} />
          );
        })}
      </div>
      <div class='btn-div'>
        <button onClick={() => handleNewRecipe()} className='receipe-list-btn'>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
