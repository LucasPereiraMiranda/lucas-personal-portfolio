import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import { Navbar } from "../NavBar";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <Flex
      justifyContent={{ base: "space-between", md: "space-around" }}
      alignItems="center"
      padding={8}
    >
      <Box display="flex" alignItems="center">
        <Link
          href="#"
          display="block"
          borderRadius="md"
          onClick={() => handleHomeClick}
        >
          <Flex alignItems="center">
            <Text
              ml={2}
              fontWeight="bold"
              fontSize={"x-large"}
              textStyle={"bordedGradientText"}
            >
              {`<> Lucas </>`}
            </Text>
          </Flex>
        </Link>

        <Box display={{ base: "none", md: "flex" }} alignItems="center">
          <Navbar />
        </Box>
      </Box>
      <Flex alignItems="center">
        <IconButton
          aria-label="Toggle Menu"
          icon={<FaBars />}
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          marginRight={{ base: "2px" }}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Navbar isSidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
}
