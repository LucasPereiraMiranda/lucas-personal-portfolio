import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

interface SocialButtonProps {
  link: string;
  arialLabel: string;
  Icon: IconType;
  hoverColor: string;
}

export function SocialButton({
  link,
  arialLabel,
  Icon,
  hoverColor,
}: SocialButtonProps) {
  return (
    <IconButton
      as={Link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={arialLabel}
      colorScheme="gray"
      icon={<Icon />}
      size="lg"
      mr="2"
      transition="background-color 0.8s ease"
      _hover={{ color: hoverColor }}
      variant="with-shadow"
    />
  );
}
