import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { TestForm } from "components/TestForm/TestForm";

describe("<TestForm />", () => {
  test("render email input", () => {
    render(<TestForm />);

    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });

  test("pass valid email to test email input field", async () => {
    render(<TestForm />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@test.com");

    await waitFor(() =>
      expect(screen.getByTestId("email-input")).toHaveValue("test@test.com")
    );
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  // test("pass invalid email to test input value", () => {
  //   render(<TestForm />);

  //   const inputEl = screen.getByTestId("email-input");
  //   userEvent.type(inputEl, "test");

  //   expect(screen.getByTestId("email-input")).toHaveValue("test");
  //   expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
  //   expect(screen.queryByTestId("error-msg").textContent).toEqual(
  //     "Please enter a valid email."
  //   );
  // });
});
