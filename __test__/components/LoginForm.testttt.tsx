import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LoginForm } from "components/LoginForm";

describe("LoginForm: ", () => {
  test("input should work", () => {
    render(<LoginForm />);
  });
});
