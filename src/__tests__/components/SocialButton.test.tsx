import { screen } from "@testing-library/react";
import { FaGithub } from "react-icons/fa";
import { renderWithChakra } from "../test-utils";
import { SocialButton } from "@/components/SocialButton";

describe("SocialButton", () => {
  const defaultProps = {
    link: "https://github.com/test",
    arialLabel: "GitHub",
    Icon: FaGithub,
    hoverColor: "#718096",
  };

  it("renders with correct aria-label", () => {
    renderWithChakra(<SocialButton {...defaultProps} />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
  });

  it("links to correct href with target _blank", () => {
    renderWithChakra(<SocialButton {...defaultProps} />);
    const link = screen.getByLabelText("GitHub");

    expect(link).toHaveAttribute("href", "https://github.com/test");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
