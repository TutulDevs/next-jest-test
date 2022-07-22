import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
// import {jest} from '@jest/globals';
import * as api from "../../__test__/api";
import { Posts } from "components/Max/Posts";

jest.mock("../../__test__/api");

describe("Async Posts", () => {
  beforeEach(() => jest.clearAllMocks());
  test("renders posts if req succeeds", async () => {
    (api.getPostsApi as jest.Mock).mockResolvedValueOnce([
      {
        userId: 1,
        id: 1,
        title: "a title",
        body: "a body",
      },
    ]);

    render(<Posts />);

    const listElems = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 2000 }
    );
    expect(listElems).not.toHaveLength(0);
    expect(
      screen.queryByText("no items to show", { exact: false })
    ).not.toBeInTheDocument();
  });

  test("renders no items text if req fails", async () => {
    (api.getPostsApi as jest.Mock).mockRejectedValueOnce("Invalid response");

    render(<Posts />);

    const listElems = screen.queryAllByRole("listitem");
    expect(listElems).toHaveLength(0);
    expect(
      screen.getByText("no items to show", { exact: false })
    ).toBeInTheDocument();
  });
});

/*


window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [
        {
          userId: 1,
          id: 1,
          title: "a title",
          body: "a body",
        },
      ],
    });

    render(<Posts />);

    const listElems = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 2000 }
    );
    expect(listElems).not.toHaveLength(0);
    expect(
      screen.queryByText("no items to show", { exact: false })
    ).not.toBeInTheDocument();


    -------------------------------

 window.fetch = jest.fn();
    const asyncMock = (window.fetch as jest.Mock).mockRejectedValueOnce({
      message: "some error thrown!",
    });

    await asyncMock();

    render(<Posts />);

    const listElems = screen.queryAllByRole("listitem");
    expect(listElems).toHaveLength(0);
    expect(
      screen.getByText("no items to show", { exact: false })
    ).toBeInTheDocument();


*/
