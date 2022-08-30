import React from "react";

import { render, screen } from "@testing-library/react";

import TextInput from "../components/TextInput";

describe("TextInput component", () => {
  test("Check render test", () => {
    render(<TextInput />);

    expect(screen).toMatchSnapshot();
  });
});
