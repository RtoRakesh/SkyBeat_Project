import { useEffect, useState } from "react";
import { Flight } from "../types";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

const FlightDetailView = () => {
  const { flightId } = useParams();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<String | null>(null);

  const flightDetail = async () => {
    try {
      const res = await axios.get(
        `https://flight-status-mock.core.travelopia.cloud/flights/${flightId}`
      );

      setFlight(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      console.log("Error which fetching detail view of individual Flight", err);
    }
  };
  useEffect(() => {
    flightDetail();
  }, [flightId]);
  return (
    <>
      <Navbar />
      {error ? (
        <p>Error fecthing the individual flight information</p>
      ) : (
        <Container maxW="container.md" py={8} pt="15vh" height="92vh">
          <Flex justify="space-between" align="center" mb={6}>
            <Heading size="lg">Flight Details</Heading>
            <Button colorScheme="blue" variant="solid">
              ← Back
            </Button>
          </Flex>

          <Box
            bg="white"
            p={6}
            borderRadius="md"
            shadow="md"
            borderWidth="1px"
            borderColor="gray.00"
          >
            <VStack align="flex-start" spacing={4} mb={4}>
              <Heading size="md">
                Flight:{" "}
                <Text as="span" color="blue.600">
                  {flight?.flightNumber}
                </Text>
              </Heading>
              <Text fontSize="lg">
                Status:{" "}
                <Badge colorScheme="green" fontSize="1em">
                  {flight?.status}
                </Badge>
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Box bg="gray.50" p={4} borderRadius="md">
                <Heading size="sm" mb={2} color="blue.600">
                  origin
                </Heading>
                <Text>
                  City: <strong>{flight?.origin}</strong>
                </Text>
              </Box>

              <Box bg="gray.50" p={4} borderRadius="md">
                <Heading size="sm" mb={2} color="blue.600">
                  destination
                </Heading>
                <Text>
                  City: <strong> {flight?.destination}</strong>
                </Text>
              </Box>

              <Box bg="gray.50" p={4} borderRadius="md">
                <Heading size="sm" mb={2} color="blue.600">
                  Airline
                </Heading>
                <Text>
                  Name: <strong>{flight?.airline}</strong>
                </Text>
              </Box>
              <Box bg="gray.50" p={4} borderRadius="md">
                <Heading size="sm" mb={2} color="blue.600">
                  DepartureTime
                </Heading>

                <Text>
                  Date & Time: <strong>{flight?.departureTime}</strong>
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default FlightDetailView;
