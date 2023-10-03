import { HStack, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      pr={"4"}
      pl={4}
      pt={2}
      pb={2}
      shadow={"base"}
      bgColor={"black"}
      spacing={"5%"}

    >
     <Link to="/">
      <Text 
      fontSize={"xl"}
      color={"white"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            color: "#bfbfbf",
          },
        }}> CryptoXplorer</Text>
     </Link>
      <Button
        variant={"unstyled"}
        color={"white"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            color: "#bfbfbf",
          },
        }}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            color: "#bfbfbf",
          },
        }}
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            color: "#bfbfbf",
          },
        }}
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
