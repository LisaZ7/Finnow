import { Flex, Link, Spacer, Tooltip } from "@chakra-ui/react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div id="Navbar">
      <Flex px={20} py={5} color="blue.600" fontWeight="bold" shadow="sm">
        <Spacer />
        <Tooltip label="Home page" rounded="lg">
          <Link
            href="/"
            _hover={{ color: "blue.500", transform: "scale(0.99)" }}
            _active={{ color: "blue.400", transform: "scale(1.01)" }}>
            Home
          </Link>
        </Tooltip>
        <Spacer />
        <Tooltip label="See my work" rounded="lg">
          <Link
            href="/learn"
            _hover={{ color: "blue.500", transform: "scale(0.99)" }}
            _active={{ color: "blue.400", transform: "scale(1.01)" }}>
            Learn
          </Link>
        </Tooltip>
        <Spacer />
        <Tooltip label="Learn more about me" rounded="lg">
          <Link
            href="/about"
            _hover={{ color: "blue.500", transform: "scale(0.99)" }}
            _active={{ color: "blue.400", transform: "scale(1.01)" }}>
            About
          </Link>
        </Tooltip>
        <Spacer />
      </Flex>
    </div>
  );
}

export default Navbar;
