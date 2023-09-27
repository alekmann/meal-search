import { Grid } from "@chakra-ui/react";
import React from "react";
import RecipeGrid from "../components/RecipeGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <RecipeGrid />
    </Grid>
  );
};

export default HomePage;
