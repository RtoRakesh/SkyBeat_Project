import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";
import logo from "../assets/airoLogo.png";

const Navbar = () => {
  return (
    <nav id="navBar">
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        backgroundColor="black"
        p="1"
        direction={{ base: "column", md: "row" }}
      >
        <Flex p="2">
          <Image boxSize={{ lg: "50px", base: "35px" }} src={logo} alt="Logo" />
          <Heading size={{ lg: "xl", base: "lg" }} color="white">
            SkyBeat
          </Heading>
        </Flex>
        <Spacer />
        <ButtonGroup gap="2">
          {/* <Button bg="white">Menu</Button> */}
        </ButtonGroup>
      </Flex>
    </nav>
  );
};

export default Navbar;
