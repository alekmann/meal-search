import { Card, CardBody, Heading, Image, useColorMode } from "@chakra-ui/react";
import Recipe from "../entities/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === "light" ? "#166534" : undefined;
  const textColor = colorMode === "light" ? "#f9fafb" : undefined;
  return (
    <Card bgColor={bgColor}>
      <Image
        src={recipe.image}
        maxWidth="500px"
        maxHeight="300px"
        objectFit="cover"
      />
      <CardBody>
        <Heading color={textColor} fontSize="2xl">
          {recipe.title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
