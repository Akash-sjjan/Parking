import "@testing-library/jest-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const AddRouting = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

test("renders correctly", () => {
  render(<AddRouting />);
});

test("Create Button is Enabled", () => {
  render(<AddRouting />);
  const btn = screen.getByTestId("createBtn");
  expect(btn).toBeEnabled();
  let click = fireEvent.click(btn);
  expect(click).toBe(true);
});

test("Register Button is Enabled", () => {
  render(<AddRouting />);
  const btn = screen.getByTestId("registerBtn");
  expect(btn).toBeEnabled();
  let click = fireEvent.click(btn);
  expect(click).toBe(true);
});
test("Clear Button is Enabled", () => {
  render(<AddRouting />);
  const btn = screen.getByTestId("clearBtn");
  expect(btn).toBeEnabled();
  let click = fireEvent.click(btn);
  expect(click).toBe(true);
});
