import { Box, IconButton, Text } from "@chakra-ui/react";
import { useLocale } from "@/contexts/LocaleContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  const toggleLocale = () => {
    setLocale(locale === "en" ? "pt" : "en");
  };

  return (
    <Box>
      <IconButton
        aria-label={
          locale === "en" ? "Switch to Portuguese" : "Mudar para Ingles"
        }
        onClick={toggleLocale}
        variant="ghost"
        title={locale === "en" ? "Switch to Portuguese" : "Mudar para Ingles"}
      >
        <Text fontSize="sm" fontWeight="bold">
          {locale === "en" ? "PT" : "EN"}
        </Text>
      </IconButton>
    </Box>
  );
}
