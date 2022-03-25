import React from "react";

export default function Recipe(props) {
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    handleDelete,
    handleEditRecipe,
  } = props;

  return (
    <div className='recipe'>
      <h1 className='recipe-name'>{name}</h1>
      <p>
        CookTime: <span className='recipe-span'>{cookTime}</span>
      </p>
      <p>
        Servings: <span className='recipe-span'>{servings}</span>
      </p>
      <p>
        Instructions:
        <span className='recipe-details'>{instructions}</span>
      </p>
      <p>
        Ingredients:
        <span className='recipe-details'>{ingredients}</span>
      </p>

      <button onClick={() => handleEditRecipe(id)} className='btn btn--primary'>
        Edit
      </button>
      <button onClick={() => handleDelete(id)} className='btn btn--secondary'>
        Delete
      </button>
    </div>
  );
}
