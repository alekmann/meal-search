import { HStack } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
