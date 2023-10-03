import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
    
      bgColor={"rgb(10, 10, 10)"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      pt={["16", "12"]}
      pb={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"lg"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Welcome to CryptoXplorer! We're your trusted source for seamless crypto trading and up-to-the-minute insights. Our user-friendly platform empowers you to navigate the world of cryptocurrencies with confidence. 
           Join us on this exciting journey towards financial freedom.
          </Text>
        </VStack>
        <VStack>
        <Avatar boxSize={"28"} mt={["4", "0"]} src={"https://i.ibb.co/RBQZNzW/Profile-Photo.jpg"}/>
          <Text>Developer</Text>
          <Text fontWeight={"500"} mt={"-3"}>Umang Raj</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
