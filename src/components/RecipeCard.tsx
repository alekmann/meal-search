import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import Recipe from "../entities/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <Image src={recipe.image} />
      <CardBody>
        <Heading fontSize="2xl">{recipe.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
