import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";
import logo from "../assets/airoLogo.png";
import "../app.css";

const Footer = () => {
  return (
    <footer>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        flexDirection={{ base: "column", md: "row" }}
        backgroundColor="gray.100"
        height="100%"
        borderTop="1px solid"
        borderColor="black"
      >
        <Flex pt={{ base: "10px" }}>
          <Image boxSize="25px" src={logo} alt="Logo" />
          <Heading size="md" px="1">
            SkyBeat
          </Heading>
        </Flex>
        <Spacer />
        <ButtonGroup gap="2" flexDirection={{ base: "column", md: "row" }}>
          <Button>Privacy Policy</Button>
          <Button>Terms & Conditions</Button>
        </ButtonGroup>
      </Flex>
    </footer>
  );
};

export default Footer;
