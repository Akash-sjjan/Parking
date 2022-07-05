import { Dispatch } from "redux";
import { CREATE_SLOTS, REGISTER_SLOT, UPDATE_SLOT } from "../../constants/consts";
import { ParkingLot, Space } from "../../types/types";

const createSlots = (spaces: string) => (dispatch: Dispatch) => {
  const count = Number(spaces);
  if (count !== NaN) {
    const slotMap: ParkingLot = {};
    for (let i = 0; i < count; i++) {
      const spaceId = Math.random().toString();
      const spaceItem: Space = {
        spaceId,
        createdAt: new Date(),
        vehicleRegNo: "",
      };
      slotMap[spaceId] = spaceItem;
    }
    console.log(slotMap);
    dispatch({ type: CREATE_SLOTS, payload: slotMap });
    alert(`${spaces} spaces created`);
  }
};

const register = (reg: string, lots: any) => (dispatch: Dispatch) => {
  let idExists: boolean = false;
  const freeSlot = Object.keys(lots).find((lot) => {
    if (lots[lot].vehicleRegNo == reg) {
      idExists = true;
    }
    return !lots[lot].vehicleRegNo;
  });
  if (idExists) {
    alert("Vehicle is already registered");
    return;
  }
  if (!freeSlot) {
    //   Alert.alert("No slots are free right now");
    alert("no Lots are free right now");
    return;
  }
  const newSlot: Space = {
    spaceId: freeSlot,
    vehicleRegNo: reg,
    createdAt: new Date(),
  };
  dispatch({ type: REGISTER_SLOT, payload: newSlot });
  alert(`${reg} is Registered`);
};

const clearLot = (space: any, lots: any, price: number) => async (dispatch: Dispatch) => {
  const { [space.spaceId]: omit, ...rest } = lots;
  const spaceId = Math.random().toString();
  const spaceItem = {
    spaceId,
    createdAt: new Date(),
    vehicleRegNo: "",
  };
  rest[spaceId] = spaceItem;
  dispatch({ type: UPDATE_SLOT, payload: rest });
  const response = await fetch("https://reqbin.com/echo/post/json", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: `{ "car-registration": ${space.vehicleRegNo}, "charge": ${price} }`,
  });
  response.json().then((data) => {
    console.log(data);
  });
};

export { createSlots, register, clearLot };
