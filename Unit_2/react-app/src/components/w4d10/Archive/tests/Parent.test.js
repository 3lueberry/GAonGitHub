import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Parent from "../components/Parent";

describe("plain old HTML", () => {
  test("renders 'Parent Component'", () => {
    render(<Parent />);
    const textElement = screen.getByText("Parent Component", { exact: false });
    expect(textElement).toBeInTheDocument;
  });

  test("renders 'Original text'", () => {
    render(<Parent />);
    const textElement = screen.getByText("original text", { exact: false });
    expect(textElement).toBeInTheDocument;
  });

  test("renders 'After button Click' hen button is clicke", () => {
    render(<Parent />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const original = screen.getByText("After button Click", { exact: false });
    expect(original).toBeInTheDocument;
    const afterClicked = screen.queryByText("Original text", { exact: false });
    expect(afterClicked).not.toBeInTheDocument;
  });
});

// getBy - throw error if not found
// queryBy - returns a null if not found
// findBy - found ? fulfilled promised : rejected promise
