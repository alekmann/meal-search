import ExtendedIngredient from "./ExtendedIngredient";

export default interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  instructions: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: ExtendedIngredient[];
}
