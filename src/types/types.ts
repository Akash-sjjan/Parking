export interface Space {
  spaceId: string;
  createdAt: Date;
  vehicleRegNo: string;
}

export interface ParkingLot {
  [id: string]: Space;
}

export interface State {
  parkingLots: ParkingLot;
}
