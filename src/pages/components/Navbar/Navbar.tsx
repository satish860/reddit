import { Flex, Image } from "@chakra-ui/react";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg="white" h="44px" padding="6px 12px">
      <Flex align="center" cursor={"pointer"}>
        <Image
          src="/images/redditFace.svg"
          width={{ base: "24px", md: "32px" }}
          mr={{ base: "0px", md: "2px" }}
          alt="logo"
        />
        <Image
          src="/images/redditText.svg"
          display={{ base: "none", md: "unset" }}
          height="46px"
          alt="Text"
        />
      </Flex>
    </Flex>
  );
};
export default Navbar;
