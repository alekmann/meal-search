import { useQuery } from "@tanstack/react-query";
import Recipe from "../entities/Recipe";
import APIClient, { FetchResponse } from "../services/api-client";
import useRecipeQueryStore from "../store";

const apiClient = new APIClient<Recipe>("/recipes/complexSearch");

const useRecipes = () => {
  const recipeQuery = useRecipeQueryStore((s) => s.recipeQuery);

  return useQuery<FetchResponse<Recipe>, Error>({
    queryKey: ["recipes", recipeQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          query: recipeQuery.searchText,
          intolerances: recipeQuery.intolerances?.join(","),
        },
      }),
  });
};

export default useRecipes;
