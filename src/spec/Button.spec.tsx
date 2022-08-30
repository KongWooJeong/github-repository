import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../components/Button";

describe("Button component", () => {
  test("Check render test", () => {
    render(<Button type={"button"} text="버튼" />);

    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  test("Check onClick method test", () => {
    const mockButtonOnClick = jest.fn();

    render(<Button type={"button"} text="버튼" onClick={mockButtonOnClick} />);
    userEvent.click(screen.getByText("버튼"));

    expect(mockButtonOnClick).toHaveBeenCalled();
  });
});
