import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithChakra } from "../test-utils";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

describe("ThemeSwitcher", () => {
  it("renders toggle button", () => {
    renderWithChakra(<ThemeSwitcher />);
    expect(screen.getByLabelText("Toggle Theme")).toBeInTheDocument();
  });

  it("is clickable", async () => {
    const user = userEvent.setup();
    renderWithChakra(<ThemeSwitcher />);

    const button = screen.getByLabelText("Toggle Theme");
    await user.click(button);

    expect(button).toBeInTheDocument();
  });
});
