import "@testing-library/jest-dom";
import CreateSlot from "./CreateSlot";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import store from "../redux/store";

// const mockStore = configureMockStore();
// const store = mockStore({
//   userState: {
//     parkingLots: [
//       {
//         spaceId: 1,
//         createdAt: new Date(),
//         vehicleRegNo: "",
//       },
//       {
//         spaceId: 2,
//         createdAt: new Date(),
//         vehicleRegNo: "",
//       },
//     ],
//   },
// });

const AddRouting = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CreateSlot />
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
  const input = screen.getByLabelText(/spaces input/i);
  fireEvent.change(input, { target: { value: 4 } });
  const btn = screen.getByTestId("submitBtn");
  expect(btn).toBeEnabled();
  let click = fireEvent.click(btn);
  expect(click).toBe(true);
});
