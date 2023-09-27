import { Card, Image } from "@chakra-ui/react";
import React from "react";
import Recipe from "../entities/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <Image src={recipe.image} />
    </Card>
  );
};

export default RecipeCard;
