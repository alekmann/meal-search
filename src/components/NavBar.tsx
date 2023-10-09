import { HStack, VStack, Text, Link, useDisclosure } from "@chakra-ui/react";
import AdvancedSearch from "./AdvancedSearch";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack>
      <HStack padding="10px" align="start" width="100%">
        <VStack width="100%" align="end">
          <SearchInput />
          <Link as="p" paddingRight="4" color="blue.500" onClick={onOpen}>
            Advanced search
          </Link>
        </VStack>
        <VStack paddingTop="2">
          <ColorModeSwitch />
        </VStack>
      </HStack>
      <AdvancedSearch isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
};

export default NavBar;
