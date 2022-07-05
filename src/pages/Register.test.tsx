import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Register from "./Register";

const AddRouting = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Register />
      </Provider>
    </BrowserRouter>
  );
};

test("renders correctly", () => {
  render(<AddRouting />);
});

test("Submit Button must be Disabled when input is Empty", () => {
  render(<AddRouting />);
  const btn = screen.getByTestId("submitBtn");
  expect(btn).toBeDisabled();
});

test("Create Spaces working correctly", () => {
  render(<AddRouting />);
  const input = screen.getByLabelText(/registration input/i);
  fireEvent.change(input, { target: { value: "KA01Z0001" } });
  const btn = screen.getByTestId("submitBtn");
  expect(btn).toBeEnabled();
  let click = fireEvent.click(btn);
  expect(click).toBe(true);
});
