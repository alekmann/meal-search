import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import RecipeCardContainer from "./RecipeCardContainer";

const RecipeGrid = () => {
  const { data, error, isLoading } = useRecipes();

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading && <Spinner />}
      {data?.results.map((recipe) => (
        <RecipeCardContainer key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </RecipeCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default RecipeGrid;
