import React from "react";

import { render, screen } from "@testing-library/react";

import ErrorBox from "../components/ErrorBox";

describe("ErrorBox component", () => {
  test("Check render test", () => {
    render(<ErrorBox message={"error"} />);

    expect(screen.getByText("error")).toBeInTheDocument();
  });
});
