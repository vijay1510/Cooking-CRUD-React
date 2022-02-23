import React from "react";

export default function EditRecipe() {
  return (
    <>
      <div>
        <label className='label-edit'>Name</label>
        <input className='input-edit name' type='text' />
      </div>
      <div>
        <label className='label-edit'>CookTime</label>
        <input className='input-edit' type='text' />
      </div>
      <div>
        <label className='label-edit'>Servings</label>
        <input className='input-edit serving' type='text' />
      </div>
      <div>
        <label className='label-edit'>Instructions</label>
        <textarea className='input-edit instruction' />
      </div>
    </>
  );
}
