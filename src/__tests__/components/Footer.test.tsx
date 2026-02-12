import { screen } from "@testing-library/react";
import { renderWithChakra } from "../test-utils";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("renders author name", () => {
    renderWithChakra(<Footer />);
    expect(screen.getByText("Lucas")).toBeInTheDocument();
  });

  it("renders current year in copyright", () => {
    renderWithChakra(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`\u00A9 ${year} \u00B7 All rights reserved`)
    ).toBeInTheDocument();
  });
});
