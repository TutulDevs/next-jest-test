import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Greeting } from "components/Max/Greeting";

describe("Greeting", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing here

    // Assert
    const helloWorldElem = screen.getByText("Hello World!");
    expect(helloWorldElem).toBeInTheDocument();
  });

  test("renders initial para text", () => {
    render(<Greeting />);

    expect(
      screen.getByText("feels good!", { exact: false })
    ).toBeInTheDocument();
  });

  test("renders changed para text on button click", () => {
    // Arrange
    render(<Greeting />);

    // Act
    userEvent.click(screen.getByRole("button"));

    // Assert
    const outputElem = screen.getByText("Changed!");
    expect(outputElem).toBeInTheDocument();
  });
});
