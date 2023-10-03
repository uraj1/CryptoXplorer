import { Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Box bgColor={"black"} w={"full"} h={"100vh"}>
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            w={"full"}
            h={"full"}
            objectFit={"contain"}
            src={
              "https://github.com/meabhisingh/react-crypto-app/blob/master/src/assets/btc.png?raw=true"
            }
          />
        </motion.div>

        <Text
          fontSize={["4xl", "6xl"]}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.700"}
          mt={"-19"}
        >
          CryptoXplorer
        </Text>
      </Box>
      <Box w={"full"} h={["70vh","90vh"]} bgColor={"black"} overflowX={"hidden"}>
        <Text
          fontSize={["3xl", "6xl"]}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"whiteAlpha.900"}
          marginTop={["50px","10px"]}
          marginBottom={"-10px"}
        >
          The World's Leading
        </Text>
        <Text
          fontSize={["3xl", "6xl"]}
          textAlign={"center"}
          fontWeight={"bold"}
          m={"-5"}
          color={"whiteAlpha.900"}
        >
          Cryptocurrency Platform
        </Text>
        <Text
          fontSize={["xl", "27px"]}
          textAlign={"center"}
          fontWeight={"semibold"}
          marginTop={"39px"}
          color={"whiteAlpha.800"}
          padding={["3", "0"]}
        >
          Buy Bitcoin, Ethereum, and all your favourite crypto
        </Text>

        <Box
          marginTop={"30px"}
          paddingLeft={["5%", "23.8%"]}
          paddingRight={["3%", "0"]}
        >
          <Flex direction="row" align="center">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              w={["15px", "20px"]}
              h={["15px", "20px"]}
            />
            <Text
              fontSize={["15px", "lg"]}
              ml="4"
              color={"whiteAlpha.800"}
              fontWeight={"semibold"}
              letterSpacing={"0.05rem"}
            >
              Trusted by more than{" "}
              <span style={{ color: "#0096ff" }}>1000+ users</span> world-wide
            </Text>
          </Flex>
          <Flex direction="row" align="center">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              w={["15px", "20px"]}
              h={["15px", "20px"]}
            />
            <Text
              fontSize={["15px", "lg"]}
              ml="4"
              color={"whiteAlpha.800"}
              fontWeight={"semibold"}
              letterSpacing={"0.05rem"}
            >
              Leader in{" "}
              <span style={{ color: "#0096ff" }}>regulatory compliance</span>{" "}
              and
              <span style={{ color: "#0096ff" }}> security certifications</span>
            </Text>
          </Flex>
          <Flex direction="row" align="center">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              w={["15px", "20px"]}
              h={["15px", "20px"]}
            />
            <Text
              fontSize={["15px", "lg"]}
              ml="4"
              color={"whiteAlpha.800"}
              fontWeight={"semibold"}
              letterSpacing={"0.05rem"}
            >
              The industry's most comprehensive{" "}
              <span style={{ color: "#0096ff" }}> insurance coverage</span> and
              <span style={{ color: "#0096ff" }}>
                {" "}
                verified proof of reserves
              </span>
            </Text>
          </Flex>
        </Box>
        <Box margin="55px">
          <Flex direction="row" align="center" justify={"center"}>
            <Text
              fontSize={["4xl", "5xl"]}
              ml={["0", "4"]}
              mr={["15px", "20"]}
              color={"whiteAlpha.800"}
              fontWeight={"semibold"}
            >
              Scan This
            </Text>

            <Image
              src="https://i.ibb.co/qjNDSPp/coin-qr.png"
              w={["90px", "140px"]}
              h={["90px", "140px"]}
            />
          </Flex>
          <Text
            align={"center"}
            ml={["-40%","-190"]}
            mt={["-5","-35"]}
            color={"whiteAlpha.800"}
            fontSize={["13px","lg"]}
          >
            Get into the <span style={{ color: "#0096ff" }}> World</span> of
            Crypto.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
