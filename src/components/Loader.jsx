import { VStack, Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="100vh" justifyContent="center">
      <Box transform={"scale(1.5)"}>
        <Spinner size={"xl"} />
      </Box>
    </VStack>
  );
};

export default Loader;
