import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Recipe from "../entities/Recipe";
import APIClient, { FetchResponse } from "../services/api-client";
import useRecipeQueryStore from "../store";

const apiClient = new APIClient<Recipe>("/recipes/complexSearch");

const useRecipes = () => {
  const recipeQuery = useRecipeQueryStore((s) => s.recipeQuery);

  return useInfiniteQuery<FetchResponse<Recipe>, Error>({
    queryKey: ["recipes", recipeQuery],
    queryFn: ({ pageParam = 0 }) =>
      apiClient.getAll({
        params: {
          query: recipeQuery.searchText,
          intolerances: recipeQuery.intolerances?.join(","),
          offset: pageParam,
          number: 10,
        },
      }),
    getNextPageParam: (
      lastPage: FetchResponse<Recipe>,
      allPages: FetchResponse<Recipe>[]
    ) => {
      const nextOffset = lastPage.offset + lastPage.number;
      return nextOffset < lastPage.totalResults ? nextOffset : undefined;
    },
  });
};

export default useRecipes;
