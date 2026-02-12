import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageToggle } from "@/components/LanguageToggle";
import { renderWithProviders } from "../test-utils";

describe("LanguageToggle", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders a toggle button", () => {
    renderWithProviders(<LanguageToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles locale on click", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageToggle />);

    const button = screen.getByRole("button");
    const initialText = button.textContent;

    await user.click(button);

    expect(button.textContent).not.toBe(initialText);
  });

  it("has accessible aria-label", () => {
    renderWithProviders(<LanguageToggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label");
  });
});
