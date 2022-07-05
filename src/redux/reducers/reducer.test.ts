import { CREATE_SLOTS, REGISTER_SLOT, UPDATE_SLOT } from "../../constants/consts";
import { createSlots } from "../actions/action";
import reducer from "./reducer";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({ parkingLots: {} });
});

test("should return the CREATE_SLOTS state", () => {
  const previousState = {
    parkingLots: {},
  };
  const action = {
    type: CREATE_SLOTS,
    payload: {
      "1": {
        spaceId: "1",
        createdAt: "2022-06-16T04:53:09.578Z",
        vehicleRegNo: "",
      },
    },
  };
  const expectedState = {
    parkingLots: {
      "1": {
        spaceId: "1",
        createdAt: "2022-06-16T04:53:09.578Z",
        vehicleRegNo: "",
      },
    },
  };
  expect(reducer(previousState, action)).toEqual(expectedState);
});

test("should return the REGISTER_SLOT state", () => {
  const previousState = {
    parkingLots: {
      "1": {
        spaceId: "1",
        createdAt: new Date(),
        vehicleRegNo: "",
      },
    },
  };
  const action = {
    type: REGISTER_SLOT,
    payload: {
      spaceId: "1",
      createdAt: "2022-06-16T04:53:09.578Z",
      vehicleRegNo: "KA01Z1111",
    },
  };
  const expectedState = {
    parkingLots: {
      "1": {
        spaceId: "1",
        createdAt: "2022-06-16T04:53:09.578Z",
        vehicleRegNo: "KA01Z1111",
      },
    },
  };
  expect(reducer(previousState, action)).toEqual(expectedState);
});

test("should return the UPDATE_SLOT state", () => {
  const previousState = {
    parkingLots: {
      "1": {
        spaceId: "1",
        createdAt: new Date(),
        vehicleRegNo: "",
      },
    },
  };
  const action = {
    type: UPDATE_SLOT,
    payload: {
      "1": {
        spaceId: "1",
        createdAt: "2022-06-16T04:53:09.578Z",
        vehicleRegNo: "",
      },
    },
  };
  const expectedState = {
    parkingLots: {
      "1": {
        spaceId: "1",
        createdAt: "2022-06-16T04:53:09.578Z",
        vehicleRegNo: "",
      },
    },
  };
  expect(reducer(previousState, action)).toEqual(expectedState);
});
