import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRecipe } from "../../types/recipe.types";

const URL = "http://localhost:3000/recipes";
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipe[], null>({
      query: () => "/?_sort=id&_order=desc",
      providesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
