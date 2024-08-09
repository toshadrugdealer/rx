import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import { IRecipe } from "../../types/recipe.types";

interface IREcopeIcon {
  recipe: IRecipe;
}

export function RecipeItem({ recipe }: IREcopeIcon) {
  const { favorites } = useFavorites();

  const { toggleFavorites } = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);
  return (
    <div className={styles.item}>
      <img
        src={recipe.image}
        alt={recipe.name}
        loading="lazy"
        width={150}
        height={90}
      />
      <h3>{recipe.name}</h3>
      <button
        onClick={() => {
          toggleFavorites(recipe);
        }}
      >
        {isExists ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
}
