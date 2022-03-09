import React from "react";

export default function EditRecipe({
  selectedRecipe,
  handleUpdateRecipes,
  handleEditRecipe,
}) {
  const { id, name, cookTime, servings, instructions, ingredients } =
    selectedRecipe;

  function handleUpdateRecipe(changes) {
    const newChange = { ...selectedRecipe, ...changes };
    handleUpdateRecipes(id, newChange);
  }

  return (
    <>
      <button className='btn-close' onClick={() => handleEditRecipe(undefined)}>
        Close
      </button>
      <div>
        <label className='label-edit'>Name</label>

        <input
          onChange={(e) =>
            handleUpdateRecipe({ name: e.target.value.toUpperCase() })
          }
          value={name}
          className='input-edit name'
          type='text'
        />
      </div>
      <div>
        <label className='label-edit'>CookTime</label>
        <input
          className='input-edit'
          type='text'
          value={cookTime}
          onChange={(e) => handleUpdateRecipe({ cookTime: e.target.value })}
        />
      </div>
      <div>
        <label className='label-edit'>Servings</label>
        <input
          className='input-edit serving'
          type='text'
          value={servings}
          onChange={(e) => handleUpdateRecipe({ servings: e.target.value })}
        />
      </div>
      <div>
        <label className='label-edit'>Instructions</label>
        <textarea
          className='input-edit instruction'
          value={instructions}
          onChange={(e) => handleUpdateRecipe({ instructions: e.target.value })}
        />
      </div>
      <div>
        <label className='label-edit'>Ingredients</label>
        <textarea
          className='input-edit instruction'
          value={ingredients}
          onChange={(e) => handleUpdateRecipe({ ingredients: e.target.value })}
        />
      </div>
    </>
  );
}
