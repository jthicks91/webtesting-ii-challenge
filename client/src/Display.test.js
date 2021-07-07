import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("Test the Display component", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("should render the count for the balls and strikes", () => {
    const { getByText } = render(<Display />);
    const ballsHeader = getByText(/balls:/i);
    const strikesHeader = getByText(/strikes:/i);

    expect(ballsHeader).toBeVisible();
    expect(strikesHeader).toBeVisible();
  });
});
