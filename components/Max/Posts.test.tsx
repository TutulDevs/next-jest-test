import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Posts } from "components/Max/Posts";

describe("Async Posts", () => {
  test("renders posts if req succeeds", async () => {
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
  });

  test("renders no items text if req fails", async () => {
    window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockRejectedValueOnce({});

    render(<Posts />);

    const listElems = screen.queryAllByRole("listitem");

    await waitFor(() => expect(listElems).toHaveLength(0));
    await waitFor(() =>
      expect(
        screen.getByText("no items to show", { exact: false })
      ).toBeInTheDocument()
    );
  });
});
