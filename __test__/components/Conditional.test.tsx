import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Conditional } from "components/Conditional";

describe("Conditional rendering: ", () => {
  it("should show the button", () => {
    render(<Conditional />);

    expect(screen.getByTestId("showHideBtn")).toBeInTheDocument();
  });

  it("should show the '---' initially", () => {
    render(<Conditional />);

    expect(screen.getByTestId("showContent")).toHaveTextContent("---");
  });

  it("should show the emoji", () => {
    render(<Conditional />);

    fireEvent.click(screen.getByTestId("showHideBtn"));

    expect(screen.getByTestId("showContent")).toHaveTextContent("😎");
  });
});
