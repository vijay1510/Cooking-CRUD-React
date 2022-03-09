import { v4 as uuidv4 } from "uuid";

export const sampleRecipes = [
  {
    id: uuidv4(),
    name: "PlAIN CHICKEN",
    cookTime: "2:45",
    servings: 2,
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: "1. chicken - 2 kg\n2. salt - 1tbs",
  },
  {
    id: uuidv4(),
    name: "PlAIN PORK",
    cookTime: "3:45",
    servings: 3,
    instructions: "1. Put salt on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: "1. pork - 2 kg\n2. pepper - 1tbs",
  },
];

export const newRecipe = {
  id: uuidv4(),
  name: "",
  cookTime: "",
  servings: "",
  instructions: "",
  ingredients: "",
};
