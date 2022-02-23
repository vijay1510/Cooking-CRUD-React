import React from "react";

export default function Recipe(props) {
  const { id, name, cookTime, servings, instructions, handleDelete } = props;

  return (
    <div className='recipe'>
      <h1>{name}</h1>
      <p>CookTime: {cookTime}</p>
      <p>Servings: {servings}</p>
      <p>
        Instructions:
        {instructions.map((i) => {
          return <li>{i}</li>;
        })}
      </p>
      <button className='btn btn--primary'>Edit</button>
      <button onClick={() => handleDelete(id)} className='btn btn--secondary'>
        Delete
      </button>
    </div>
  );
}
