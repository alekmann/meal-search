import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  let searchText = "";
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          searchText = ref.current.value;
          console.log(searchText);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search meals..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
