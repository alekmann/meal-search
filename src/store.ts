import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface RecipeQuery {
  searchText?: string;
}

interface RecipeQueryStore {
  recipeQuery: RecipeQuery;
  setSearchText: (searchText: string) => void;
}

const useRecipeQueryStore = create<RecipeQueryStore>((set) => ({
  recipeQuery: {},
  setSearchText: (searchText) => set(() => ({ recipeQuery: { searchText } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Meal Query Store", useRecipeQueryStore);

export default useRecipeQueryStore;
