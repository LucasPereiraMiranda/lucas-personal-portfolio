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
} from "@chakra-ui/react";
import { FaBars, FaDev } from "react-icons/fa";
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
        <IconButton
          aria-label="Dev Icon"
          icon={<FaDev size={50} />}
          variant="ghost"
          marginRight={4}
          onClick={() => handleHomeClick}
        />
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
