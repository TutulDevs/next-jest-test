import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Conditional } from "components/Conditional";

describe("Conditional rendering: ", () => {
  // const btn = screen.getByTestId("showHideBtn");
  // const content = screen.getByTestId("showContent");

  it("should show the button", () => {
    render(<Conditional />);

    expect(screen.getByTestId("showHideBtn")).toBeInTheDocument();
  });

  it("should show the '---' initially", () => {
    render(<Conditional />);

    expect(screen.getByTestId("showContent")).not.toHaveTextContent("😎");
  });

  it("should show the emoji", () => {
    render(<Conditional />);

    fireEvent.click(screen.getByTestId("showHideBtn"));

    expect(screen.getByTestId("showContent")).toHaveTextContent("😎");
  });
});
