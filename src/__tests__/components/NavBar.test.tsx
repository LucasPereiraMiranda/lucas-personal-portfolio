import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { Navbar } from "@/components/NavBar";
import { en } from "@/lib/i18n/locales/en";

describe("Navbar", () => {
  it("renders all navigation links", () => {
    renderWithProviders(<Navbar />);

    expect(screen.getByText(en.nav.home)).toBeInTheDocument();
    expect(screen.getByText(en.nav.techStack)).toBeInTheDocument();
    expect(screen.getByText(en.nav.about)).toBeInTheDocument();
    expect(screen.getByText(en.nav.projects)).toBeInTheDocument();
    expect(screen.getByText(en.nav.contact)).toBeInTheDocument();
  });

  it("renders in column direction when isSidebar", () => {
    const { container } = renderWithProviders(<Navbar isSidebar />);
    const flex = container.firstChild;
    expect(flex).toHaveStyle("flex-direction: column");
  });
});
