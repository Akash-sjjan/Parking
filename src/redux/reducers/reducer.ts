import { CREATE_SLOTS, REGISTER_SLOT, UPDATE_SLOT } from "../../constants/consts";
import { State } from "../../types/types";

export const initialState: State = {
  parkingLots: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_SLOTS:
      return {
        ...state,
        parkingLots: {
          ...state.parkingLots,
          ...action.payload,
        },
      };

    case REGISTER_SLOT:
      return {
        ...state,
        parkingLots: {
          ...state.parkingLots,
          [action.payload.spaceId]: action.payload,
        },
      };

    case UPDATE_SLOT:
      return { ...state, parkingLots: action.payload };

    default:
      return state;
  }
};

export default reducer;
