export interface IRecipe {
  id: string;
  name: string;
  image: string;
}
export interface IRecipeData extends Omit<IRecipe, "id"> {}
