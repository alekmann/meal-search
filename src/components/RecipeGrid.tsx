import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

const RecipeGrid = () => {
  const { data, error, isLoading } = useRecipes();

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      column={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading && <Spinner />}
      {data?.results.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </SimpleGrid>
  );
};

export default RecipeGrid;
