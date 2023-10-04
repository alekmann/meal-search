import {
  chakra,
  GridItem,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { AiFillClockCircle } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { useParams } from "react-router-dom";
import IconDetails from "../components/IconDetails";
import useRecipe from "../hooks/useRecipe";
import DOMPurify from "dompurify";

const SafeHtml = chakra("div");

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
      <GridItem
        display="flex"
        flexDirection="column"
        alignItems="center"
        order={{ base: 2, md: 1 }}
      >
        <Heading size="lg" pb={paddingB}>
          {recipeDetails.title}
        </Heading>
        <HStack spacing={5} pb={paddingB}>
          <IconDetails
            icon={AiFillClockCircle}
            information={`${recipeDetails.readyInMinutes} minutes`}
          />
          <IconDetails
            icon={GiKnifeFork}
            information={`Servings: ${recipeDetails.servings}`}
          />
        </HStack>

        <HStack width="full" spacing={10} alignItems="flex-start">
          <VStack width="full" justifyContent="flex-start" alignItems="end">
            <UnorderedList>
              {recipeDetails.extendedIngredients?.map(({ id, original }) => (
                <ListItem key={id}>{original}</ListItem>
              ))}
            </UnorderedList>
          </VStack>

          <VStack width="full" alignItems="flex-start">
            <SafeHtml
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(recipeDetails.instructions),
              }}
              maxW="400px"
            />
          </VStack>
        </HStack>
      </GridItem>
      <GridItem
        pb={4}
        display="grid"
        flexDirection="column"
        justifyContent="center"
        order={{ base: 1, md: 2 }}
      >
        <HStack alignItems="flex-start">
          <Image src={recipeDetails.image} objectFit="fill" />
        </HStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default RecipeDetailPage;
