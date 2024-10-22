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
        height="8vh"
        borderTop="1px solid"
        borderColor="black"
      >
        <Flex>
          <Image boxSize="30px" src={logo} alt="Logo" />
          <Heading size="md" px="2">
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
