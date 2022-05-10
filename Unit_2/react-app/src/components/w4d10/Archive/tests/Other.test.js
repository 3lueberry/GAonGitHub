import { render, screen } from "@testing-library/react";
import Other from "../components/Other";

describe("async component", () => {
  test("renders items if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({ json: async () => [{ id: "70", name: "John Doe" }] });

    render(<Other />);

    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});
