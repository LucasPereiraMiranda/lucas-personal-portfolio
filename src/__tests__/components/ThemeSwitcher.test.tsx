import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { renderWithChakra } from "../test-utils";

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
