import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "components/LoginForm/LoginForm";

describe("LoginForm: ", () => {
  it("check proper rendering", () => {
    render(<LoginForm />);

    const inputName = screen.getByTestId("inputName");
    const inputAge = screen.getByTestId("inputAge");

    expect(inputName).toBeInTheDocument();
    expect(inputAge).toBeInTheDocument();
    expect(inputAge).toHaveAttribute("type", "number");
  });

  it("tests the disabled button & login function", async () => {
    const handleFormSubmit = jest.fn();

    render(<LoginForm onSubmit={handleFormSubmit} />);

    const inputName = screen.getByTestId("inputName");
    const inputAge = screen.getByTestId("inputAge");
    const submitBtn = screen.getByTestId("submitBtn");

    expect(submitBtn).toBeDisabled();

    userEvent.type(inputName, "john");
    userEvent.type(inputAge, "10");

    waitFor(() => expect(submitBtn).not.toBeDisabled());

    userEvent.click(submitBtn);
    waitFor(() => expect(handleFormSubmit).toHaveBeenCalled());
  });
});

describe("LoginForm Email", () => {
  it("tests email rendered", () => {
    render(<LoginForm />);

    const inputEmail = screen.getByTestId("inputEmail");

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveAttribute("type", "email");
    expect(screen.queryByTestId("errorMsg")).not.toBeInTheDocument();
  });

  it("tests valid email", async () => {
    render(<LoginForm />);

    const inputEmail = screen.getByTestId("inputEmail");
    userEvent.type(inputEmail, "test@test.com");

    waitFor(() =>
      expect(screen.getByTestId("inputEmail")).toHaveValue("test@test.com")
    );
    expect(screen.queryByTestId("errorMsg")).not.toBeInTheDocument();
  });

  test("pass invalid email to test input value", async () => {
    render(<LoginForm />);

    const inputEmail = screen.getByTestId("inputEmail");
    userEvent.type(inputEmail, "test.b");

    waitFor(() =>
      expect(screen.getByTestId("inputEmail")).toHaveValue("test.b")
    );
    waitFor(() => expect(screen.getByTestId("errorMsg")).toBeInTheDocument());
    waitFor(() =>
      expect(screen.getByTestId("errorMsg")).toHaveTextContent(
        "Please enter a valid email."
      )
    );
  });
});
