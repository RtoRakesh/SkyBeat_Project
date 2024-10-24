import { useEffect, useState } from "react";
import { Flight } from "../types";
import axios from "axios";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useBreakpointValue,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const FlightTable = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<String | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://flight-status-mock.core.travelopia.cloud/flights"
      );
      setFlights(res.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      console.log("error while fetching data from api", err);
    }
  };

  useEffect(() => {
    fetchData();

    const id = setInterval(() => fetchData(), 1000);
    return () => clearInterval(id);
  }, []);

  const isTableView = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Navbar />
      {error ? (
        <p>Error in fetching the data</p>
      ) : (
        <Box
          overflowX="auto"
          display="flex"
          justifyContent="center"
          pt="15vh"
          minHeight="100vh"
        >
          {isTableView ? (
            <TableContainer>
              <Heading
                textAlign="center"
                pb="4"
                fontFamily="mono"
                fontSize={{ base: "md", md: "xl", lg: "2xl", xl: "3xl" }}
              >
                Live Flight Information
              </Heading>
              <Table
                variant="striped"
                colorScheme="gray"
                bg={useColorModeValue("#f0f0f0", "#202023")}
                size={{ base: "sm", lg: "md", xl: "lg" }}
                width={{ base: "70vw ", md: "80vw", lg: "96vw", xl: "99vw" }}
              >
                <Thead>
                  <Tr backgroundColor="#013976">
                    <Th color="white">Flight Number</Th>
                    <Th color="white">Airline</Th>
                    <Th color="white">Origin</Th>
                    <Th color="white">Destination</Th>
                    <Th color="white">Departure Time</Th>
                    <Th color="white">Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {flights.map((flight) => (
                    <Tr key={flight.id?.toString()}>
                      <Td
                        style={{
                          textDecoration: "underline",
                          color: "#2b6cb0",
                          fontWeight: "bold",
                        }}
                      >
                        <Link to={`/${flight.id}`}>{flight.flightNumber}</Link>
                      </Td>
                      <Td>{flight.airline}</Td>
                      <Td>{flight.origin}</Td>
                      <Td>{flight.destination}</Td>
                      <Td>{flight.departureTime}</Td>
                      <Td>{flight.status}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Flex direction="column" alignItems="center" width="100%">
              <Heading
                textAlign="center"
                pb="4"
                fontFamily="mono"
                fontSize={{ base: "lg", md: "xl" }}
              >
                Live Flight Information
              </Heading>
              {flights.map((flight) => (
                <Box
                  key={flight.id?.toString()}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p="6"
                  mb="4"
                  width={{ base: "90vw", sm: "80vw" }}
                  boxShadow="lg"
                  bg={useColorModeValue("gray.50", "gray.700")}
                >
                  <Stack spacing={3}>
                    <Text fontWeight="bold">
                      Flight Number:{" "}
                      <Link
                        style={{
                          textDecoration: "underline",
                          color: "#2b6cb0",
                          fontWeight: "bold",
                        }}
                        to={`/${flight.id}`}
                      >
                        {flight.flightNumber}
                      </Link>
                    </Text>
                    <Text>Airline: {flight.airline}</Text>
                    <Text>Origin: {flight.origin}</Text>
                    <Text>Destination: {flight.destination}</Text>
                    <Text>Departure Time: {flight.departureTime}</Text>
                    <Text>Status: {flight.status}</Text>
                  </Stack>
                </Box>
              ))}
            </Flex>
          )}
        </Box>
      )}
      <Footer />
    </>
  );
};

export default FlightTable;
