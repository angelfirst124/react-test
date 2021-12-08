import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("static text in home", () => {
  render(<App />);
  const titleElement = screen.getByText(/Is Your Plan/i);
  expect(titleElement).toBeInTheDocument();
});
