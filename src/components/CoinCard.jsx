import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ name, img, symbol, id, price, currencySymbol = "₹"}) => {
  return (
    <>
      <Link to={`/coin/${id}`}>
        <VStack
          w={52}
          shadow={"lg"}
          p={"8"}
          borderRadius={"3xl"}
          transition={"all 0.3s"}
          m={"4"}
          bgGradient='linear(#FAFAFA, #fff)'
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={img}
            h={"10"}
            w={"10"}
            objectFit={"contain"}
            alt={"Exchange"}
          />
          <Heading size={"md"} noOfLines={1}>
            {symbol}
          </Heading>

          <Text noOfLines={1}>{name}</Text>
          <Text noOfLines={1}>{price ? `${currencySymbol}${price}`: "NA"}</Text>
        </VStack>
      </Link>
    </>
  );
};

export default CoinCard
