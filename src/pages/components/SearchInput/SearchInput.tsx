import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type Props = {};

function SearchInput({}: Props) {
  return (
    <Flex  flexGrow={1} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          
          children={<SearchIcon mb={2} color="gray.400" />}
        />
        <Input type="search"
         placeholder="Search Reddit"
         _placeholder={{color:"gray.500"}} 
         _hover={{
            bg:"white",
            border:"1px solid",
            borderColor:"blue.500"
         }}
         _focus={{
            outline:"none",
            border:"1px solid",
            borderColor:"blue.500"
         }}
         height="34px"
         bg="gray.50"
         />
      </InputGroup>
    </Flex>
  );
}

export default SearchInput;
