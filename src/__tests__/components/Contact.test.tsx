import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../test-utils";
import { Contact } from "@/components/Contact";
import { en } from "@/lib/i18n/locales/en";

describe("Contact", () => {
  it("renders form fields", () => {
    renderWithProviders(<Contact />);

    expect(
      screen.getByPlaceholderText(en.contact.form.namePlaceholder)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(en.contact.form.emailPlaceholder)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(en.contact.form.subjectPlaceholder)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(en.contact.form.messagePlaceholder)
    ).toBeInTheDocument();
  });

  it("renders submit button", () => {
    renderWithProviders(<Contact />);
    expect(
      screen.getByRole("button", { name: new RegExp(en.contact.form.send) })
    ).toBeInTheDocument();
  });

  it("renders social links", () => {
    renderWithProviders(<Contact />);

    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getAllByText("Email").length).toBeGreaterThanOrEqual(1);
  });

  it("allows typing in form fields", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Contact />);

    const nameInput = screen.getByPlaceholderText(
      en.contact.form.namePlaceholder
    );
    await user.type(nameInput, "Lucas");

    expect(nameInput).toHaveValue("Lucas");
  });
});
