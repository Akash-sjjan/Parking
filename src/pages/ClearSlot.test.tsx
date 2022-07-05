import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ClearSlot from "./ClearSlot";
import store from "../redux/store";
// import configureMockStore from "redux-mock-store";

// const mockStore = configureMockStore();
// const store = mockStore({
//   userState: {
//     parkingLots: {
//       "0.7969485177774951": {
//         spaceId: "0.7969485177774951",
//         vehicleRegNo: "sds",
//         createdAt: "2022-06-16T04:04:47.089Z",
//       },
//       "0.383145594702331": {
//         spaceId: "0.383145594702331",
//         vehicleRegNo: "asd",
//         createdAt: "2022-06-16T04:04:53.921Z",
//       },
//       "0.8876167895132916": {
//         spaceId: "0.8876167895132916",
//         createdAt: "2022-06-16T04:04:43.113Z",
//         vehicleRegNo: "",
//       },
//       "0.47078942957689396": {
//         spaceId: "0.47078942957689396",
//         createdAt: "2022-06-16T04:04:43.113Z",
//         vehicleRegNo: "",
//       },
//     },
//   },
// });
const AddRouting = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ClearSlot />
      </Provider>
    </BrowserRouter>
  );
};

test("renders correctly", () => {
  render(<AddRouting />);
});
test("Go Back Button must be Enabled", () => {
  render(<AddRouting />);
  const btn = screen.getByTestId("goBackBtn");
  expect(btn).toBeEnabled();
});

// test("Price", () => {
//   render(<AddRouting />);
//   const btn = screen.getByTestId("deregistrationBtn");
//   expect(btn).toBeEnabled();
// });
