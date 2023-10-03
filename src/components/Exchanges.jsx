import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, Text } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) {
    return <Error message={"Error While Fetching Exchanges"}/>;
  }

  return (
    <Container maxW={"container.xl"} >
      {loading ? (
        <Loader />
      ) : (
        <>
        <HStack
            justifyContent={"center"}
            fontSize={"6xl"}
            fontWeight={"600"}
            p="4"
            fontFamily={"bebas neue"}
            bgGradient='linear(to-r, #fff, #F2F2F2, #fff)'
            height={"80px"}
          >
            <Text >Exchanges List</Text>
          </HStack>
          <HStack justifyContent={"center"} p={"3"} m={"4"} fontSize={"xl"} textAlign={"center"} fontWeight={"500"}>
            <Text as={"i"}>
            Cryptocurrency exchanges facilitate trading and investing in digital assets, with options including centralized, decentralized, P2P, and derivatives platforms.
            </Text>
          </HStack>

          <HStack wrap={"wrap"}  justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                rank={i.trust_score_rank}
                img={i.image}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
