import { useGetRecipesQuery } from "../store/api/api";
import { CreateRecipe } from "./create-recipe/CreateRecipe";
import { Header } from "./header/Header";
import { RecipeItem } from "./recipe-item/RecipeItem";
import styles from "./App.module.css";

// const userId = 1;

function App() {
  const { isLoading, data } = useGetRecipesQuery(null);
  const isPalindrome = (str: string) => {
    if (str === str.split("").reverse().join("")) {
      return console.log(`"${str}" палиндром`);
    } else {
      return console.log(`"${str}" не палиндром`);
    }
  };
  // isPalindrome("aboba");
  // (undefined, { skip: !userId });
  return (
    <section className={styles.section}>
      <Header />
      <CreateRecipe />
      {/* <User /> */}
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  );
}

export default App;
