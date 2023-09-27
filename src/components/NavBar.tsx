import { HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
