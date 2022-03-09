import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({
  sampleRecipes,
  handleNewRecipe,
  handleDelete,
  handleEditRecipe,
}) {
  return (
    <div className='receipe-list'>
      <div>
        {sampleRecipes.map((recipe) => {
          return (
            <div>
              <Recipe
                key={recipe.id}
                {...recipe}
                handleDelete={handleDelete}
                handleEditRecipe={handleEditRecipe}
              />
            </div>
          );
        })}
      </div>

      <div className='btn-div'>
        <button className='receipe-list-btn' onClick={() => handleNewRecipe()}>
          <span className='recipe-add'>Add Recipe</span>
        </button>
      </div>
    </div>
  );
}
