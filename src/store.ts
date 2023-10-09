import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface RecipeQuery {
  searchText?: string;
  intolerances?: string[];
}

interface RecipeQueryStore {
  recipeQuery: RecipeQuery;
  setSearchText: (searchText: string) => void;
  setIntolerances: (intolerances: string[]) => void;
}

const useRecipeQueryStore = create<RecipeQueryStore>((set) => ({
  recipeQuery: {},
  setSearchText: (searchText) =>
    set((state) => ({ recipeQuery: { ...state.recipeQuery, searchText } })),
  setIntolerances: (intolerances) =>
    set((state) => ({ recipeQuery: { ...state.recipeQuery, intolerances } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Meal Query Store", useRecipeQueryStore);

export default useRecipeQueryStore;
