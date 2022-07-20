import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Counter } from "components/Counter";

describe("Counter test:", () => {
  //  test block 01
  test("increment counter", () => {
    //  render on virtual screen/ dom
    render(<Counter />);

    // select the element to interact
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    // let's interact
    fireEvent.click(incrementBtn);

    // assert the expect result
    expect(counter).toHaveTextContent("1");
  });

  // test block 02
  it("decrement btn disabled", () => {
    render(<Counter />);

    const decrementBtn = screen.getByTestId("decrement");

    expect(decrementBtn).toBeDisabled();
  });
});
