import {
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { ProjectType } from "../../types/project";

const MotionButton = motion(Button);

interface ProjectFiltersProps {
  technologies: string[];
  types: ProjectType[];
  selectedTechnology?: string;
  selectedType?: string;
  onTechnologyChange: (tech?: string) => void;
  onTypeChange: (type?: string) => void;
}

export function ProjectFilters({
  technologies,
  types,
  selectedTechnology,
  selectedType,
  onTechnologyChange,
  onTypeChange,
}: ProjectFiltersProps) {
  const buttonBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(26, 32, 44, 0.6)"
  );
  const buttonBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );
  const menuBg = useColorModeValue("white", "gray.800");
  const menuItemHover = useColorModeValue("purple.50", "gray.700");

  const hasActiveFilters = selectedTechnology || selectedType;

  const clearFilters = () => {
    onTechnologyChange(undefined);
    onTypeChange(undefined);
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      web: "Web App",
      cli: "CLI Tool",
      mobile: "Mobile",
      library: "Library",
      api: "API",
      devops: "DevOps",
    };
    return labels[type] || type;
  };

  return (
    <Wrap spacing="4" justify="center" mb="8">
      {/* Technology Filter */}
      <WrapItem>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            bg={selectedTechnology ? "purple.500" : buttonBg}
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor={selectedTechnology ? "purple.400" : buttonBorder}
            color={selectedTechnology ? "white" : "inherit"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(128, 90, 213, 0.3)",
              bg: selectedTechnology ? "purple.600" : buttonBg,
            }}
            _active={{
              transform: "scale(0.95)",
            }}
            transition="all 0.2s"
            borderRadius="full"
            px="6"
          >
            {selectedTechnology || "All Technologies"}
          </MenuButton>
          <MenuList
            bg={menuBg}
            borderColor={buttonBorder}
            borderRadius="xl"
            py="2"
            boxShadow="xl"
          >
            <MenuItem
              onClick={() => onTechnologyChange(undefined)}
              borderRadius="md"
              mx="2"
              _hover={{ bg: menuItemHover }}
            >
              All Technologies
            </MenuItem>
            {technologies.map((tech) => (
              <MenuItem
                key={tech}
                onClick={() => onTechnologyChange(tech)}
                borderRadius="md"
                mx="2"
                _hover={{ bg: menuItemHover }}
                fontWeight={selectedTechnology === tech ? "bold" : "normal"}
                color={selectedTechnology === tech ? "purple.400" : "inherit"}
              >
                {tech}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </WrapItem>

      {/* Type Filter */}
      <WrapItem>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            bg={selectedType ? "cyan.500" : buttonBg}
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor={selectedType ? "cyan.400" : buttonBorder}
            color={selectedType ? "white" : "inherit"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(0, 217, 255, 0.3)",
              bg: selectedType ? "cyan.600" : buttonBg,
            }}
            _active={{
              transform: "scale(0.95)",
            }}
            transition="all 0.2s"
            borderRadius="full"
            px="6"
          >
            {selectedType ? getTypeLabel(selectedType) : "All Types"}
          </MenuButton>
          <MenuList
            bg={menuBg}
            borderColor={buttonBorder}
            borderRadius="xl"
            py="2"
            boxShadow="xl"
          >
            <MenuItem
              onClick={() => onTypeChange(undefined)}
              borderRadius="md"
              mx="2"
              _hover={{ bg: menuItemHover }}
            >
              All Types
            </MenuItem>
            {types.map((type) => (
              <MenuItem
                key={type}
                onClick={() => onTypeChange(type)}
                borderRadius="md"
                mx="2"
                _hover={{ bg: menuItemHover }}
                fontWeight={selectedType === type ? "bold" : "normal"}
                color={selectedType === type ? "cyan.400" : "inherit"}
              >
                {getTypeLabel(type)}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </WrapItem>

      {/* Clear Filters Button */}
      <AnimatePresence>
        {hasActiveFilters && (
          <WrapItem>
            <MotionButton
              leftIcon={<FaTimes />}
              onClick={clearFilters}
              bg="transparent"
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="red.400"
              color="red.400"
              _hover={{
                bg: "rgba(255, 0, 0, 0.1)",
                transform: "translateY(-2px)",
              }}
              _active={{ transform: "scale(0.95)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              borderRadius="full"
              px="6"
            >
              Clear
            </MotionButton>
          </WrapItem>
        )}
      </AnimatePresence>
    </Wrap>
  );
}
