import { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";
const defaultValue = {
  name: "",
  image: "",
};
export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(defaultValue);
  const [createRecipe] = useCreateRecipeMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Create new Recipe:</p>
        <label>
          <input
            type="text"
            placeholder="Recipe name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Recipe image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
