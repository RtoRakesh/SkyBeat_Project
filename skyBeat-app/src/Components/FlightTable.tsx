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

  return (
    <>
      <Navbar />
      {error ? (
        <p>Error in fetching The data</p>
      ) : (
        <Box
          overflowX="auto"
          display="flex"
          justifyContent="center"
          pt="15vh"
          minHeight="100vh"
        >
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
              id="tablen"
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
                    <Td color="blue">
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
        </Box>
      )}
      <Footer />
    </>
  );
};

export default FlightTable;
