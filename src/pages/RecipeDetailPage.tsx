import { GridItem, Heading, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import { AiFillClockCircle } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { useParams } from "react-router-dom";
import IconDetails from "../components/IconDetails";
import useRecipe from "../hooks/useRecipe";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { data: recipeDetails, isLoading, error } = useRecipe(+id!);
  const paddingB = 4;

  console.log(recipeDetails);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error occurred!</div>;

  if (!recipeDetails) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem pb={4}>
        <HStack>
          <Image
            src={recipeDetails.image}
            maxW="500px"
            maxH="300px"
            //   pb={paddingB}
          />
        </HStack>
      </GridItem>
      <GridItem>
        <Heading size="lg" pb={paddingB}>
          {recipeDetails.title}
        </Heading>
        <HStack spacing={5}>
          <IconDetails
            icon={AiFillClockCircle}
            information={`${recipeDetails.readyInMinutes} minutes`}
          />
          <IconDetails
            icon={GiKnifeFork}
            information={`Servings: ${recipeDetails.servings}`}
          />
        </HStack>

        <ul>
          {recipeDetails.extendedIngredients?.map(({ id, original }) => (
            <li key={id}>{original}</li>
          ))}
        </ul>
      </GridItem>
    </SimpleGrid>
  );
};

export default RecipeDetailPage;
