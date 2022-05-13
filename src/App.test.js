import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders fetch greeting button", () => {
  render(<App />);
  const button = screen.getByText(/fetch greeting/i);
  expect(button).toBeInTheDocument();
});
test("renders set greeting button", () => {
  render(<App />);
  const button = screen.getByText(/set greeting/i);
  expect(button).toBeInTheDocument();
});
