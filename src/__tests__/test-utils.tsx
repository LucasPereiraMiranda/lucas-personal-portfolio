import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { LocaleProvider } from "@/contexts/LocaleContext";

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <LocaleProvider>{children}</LocaleProvider>
    </ChakraProvider>
  );
}

function ChakraOnly({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export function renderWithChakra(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: ChakraOnly, ...options });
}

export { render };
