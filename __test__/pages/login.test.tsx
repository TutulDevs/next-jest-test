import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Login from "pages/login";
import { createMockRouter } from "lib/createMockRouter";

describe("Login Page", () => {
  let user: any;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("renders the login page initially", () => {
    const { asFragment } = render(<Login />);

    expect(
      screen.getByRole("heading", {
        name: "Login",
      })
    ).toBeInTheDocument();
    expect((screen.getByLabelText("Username") as HTMLInputElement).value).toBe(
      ""
    );
    expect((screen.getByLabelText("Email") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("Password") as HTMLInputElement).value).toBe(
      ""
    );
    expect(
      (screen.getByLabelText("Confirm Password") as HTMLInputElement).value
    ).toBe("");
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.queryByTestId("emailError")).toBeNull();
    expect(screen.queryByTestId("passwordError")).toBeNull();

    // snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to update username", async () => {
    render(<Login />);

    const usernameInput: HTMLInputElement = screen.getByLabelText("Username");
    await user.type(usernameInput, "john_doe");

    expect(usernameInput.value).toBe("john_doe");
  });

  it("should be able to update email", async () => {
    render(<Login />);

    const emailInput: HTMLInputElement = screen.getByLabelText("Email");
    await user.type(emailInput, "john@mail.com");

    expect(emailInput.value).toBe("john@mail.com");
  });

  it("should be able to update password", async () => {
    render(<Login />);

    const passwordInput: HTMLInputElement = screen.getByLabelText("Password");
    await user.type(passwordInput, "testPassword");

    expect(passwordInput.value).toBe("testPassword");
  });

  it("should be able to update confirm password", async () => {
    render(<Login />);

    const confirmPasswordInput: HTMLInputElement =
      screen.getByLabelText("Confirm Password");
    await user.type(confirmPasswordInput, "testPassword");

    expect(confirmPasswordInput.value).toBe("testPassword");
  });

  it("renders email input error message", async () => {
    render(<Login />);

    const emailInput: HTMLInputElement = screen.getByLabelText("Email");
    const emailInputErrorElem = screen.queryByTestId("emailError");

    expect(emailInputErrorElem).not.toBeInTheDocument();

    await user.type(emailInput, "johnkk.n");

    expect(emailInput).toHaveValue("johnkk.n");

    const emailInputErrorElemAgain = screen.queryByTestId("emailError");
    expect(emailInputErrorElemAgain).toBeInTheDocument();
  });

  it("renders password input error message", async () => {
    render(<Login />);

    const passwordInput: HTMLInputElement = screen.getByLabelText("Password");

    expect(screen.queryByTestId("passwordError")).toBeNull();

    await user.type(passwordInput, "pass");

    expect(passwordInput.value).toBe("pass");
    expect(screen.queryByTestId("passwordError")).toBeInTheDocument();
  });

  it("renders enabled submit btn", async () => {
    render(<Login />);

    const usernameInput: HTMLInputElement = screen.getByLabelText("Username");
    const emailInput: HTMLInputElement = screen.getByLabelText("Email");
    const passwordInput: HTMLInputElement = screen.getByLabelText("Password");
    const passwordConfirmInput: HTMLInputElement =
      screen.getByLabelText("Confirm Password");

    const inputObj = {
      username: "john_doe",
      email: "john_doe@example.com",
      password: "asdf1234",
      passwordConfirm: "asdf1234",
    };

    await user.type(usernameInput, inputObj.username);
    await user.type(emailInput, inputObj.email);
    await user.type(passwordInput, inputObj.password);
    await user.type(passwordConfirmInput, inputObj.passwordConfirm);

    expect(usernameInput.value).toBe(inputObj.username);
    expect(emailInput.value).toBe(inputObj.email);
    expect(passwordInput.value).toBe(inputObj.password);
    expect(passwordConfirmInput.value).toBe(inputObj.passwordConfirm);

    expect(screen.getByRole("button")).toBeEnabled();
    expect(screen.queryByTestId("emailError")).toBeNull();
    expect(screen.queryByTestId("passwordError")).toBeNull();
  });

  it("submit the form & route change", async () => {
    const inputObj = {
      username: "john_doe",
      email: "john_doe@example.com",
      password: "asdf1234",
      passwordConfirm: "asdf1234",
    };
    const mockLogin = jest.fn();

    const router = createMockRouter({ pathname: "/" });

    render(
      <RouterContext.Provider value={router}>
        <Login onSubmit={mockLogin(inputObj)} />
      </RouterContext.Provider>
    );

    const usernameInput: HTMLInputElement = screen.getByLabelText("Username");
    const emailInput: HTMLInputElement = screen.getByLabelText("Email");
    const passwordInput: HTMLInputElement = screen.getByLabelText("Password");
    const passwordConfirmInput: HTMLInputElement =
      screen.getByLabelText("Confirm Password");
    const submitBtn = screen.getByRole("button");

    await user.type(usernameInput, inputObj.username);
    await user.type(emailInput, inputObj.email);
    await user.type(passwordInput, inputObj.password);
    await user.type(passwordConfirmInput, inputObj.passwordConfirm);

    expect(usernameInput.value).toBe(inputObj.username);
    expect(emailInput.value).toBe(inputObj.email);
    expect(passwordInput.value).toBe(inputObj.password);
    expect(passwordConfirmInput.value).toBe(inputObj.passwordConfirm);
    expect(screen.queryByTestId("emailError")).toBeNull();
    expect(screen.queryByTestId("passwordError")).toBeNull();

    expect(submitBtn).toBeEnabled();

    await user.click(submitBtn);

    expect(mockLogin).toHaveBeenCalled();
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith(inputObj);

    expect(router.push).toHaveBeenCalled();
  });
});
