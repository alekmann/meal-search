import { useQuery } from "@tanstack/react-query";
import RecipeDetails from "../entities/RecipeDetails";
import APIClient from "../services/api-client";

const useRecipe = (recipeId: number) => {
  const apiClient = new APIClient<RecipeDetails>(`/information`);

  return useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => apiClient.get(recipeId),
  });
};

export default useRecipe;
