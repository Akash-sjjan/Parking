import React, { useMemo } from "react";
import { connect } from "react-redux";
import { clearLot } from "../redux/actions/action";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

type Props = {
  lots: any;
  clearLot: Function;
};

function ClearSlot({ lots, clearLot }: Props) {
  const navigate = useNavigate();

  const slots = useMemo(() => {
    return Object.values(lots);
  }, [lots]);
  const calculateAmount = (date: Date) => {
    const hours: number = Math.ceil((+new Date() - +date) / 1000 / 60 / 60);
    if (hours <= 2) {
      return 10;
    }
    return (hours - 1) * 10;
  };

  const clearSlot = (space: any) => {
    const price = calculateAmount(space.createdAt);
    clearLot(space, lots, price);
  };
  console.log(lots);

  return (
    <div>
      <button data-testid="goBackBtn" onClick={() => navigate(-1)}>
        go back
      </button>
      <div>{JSON.stringify(lots, null, 10)}</div>
      <ul>
        {slots.map((space: any) => {
          if (!space.vehicleRegNo) return null;
          return (
            <div>
              <Card sx={{ minWidth: 275, margin: 1 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Space ID: {space.spaceId}
                  </Typography>
                  <Typography>vehicleRegNo: </Typography>
                  <Typography variant="h5" component="div">
                    {space.vehicleRegNo}
                  </Typography>

                  <Typography data-testid="checkoutPrice" id="deregister-charge" variant="body2">
                    Price: {calculateAmount(space.createdAt)}
                  </Typography>
                  <Typography id="deregister-time-spent" variant="body2">
                    Time spent: {calculateAmount(space.createdAt)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    data-testid="deregistrationBtn"
                    id="deregister-payment-button"
                    size="small"
                    onClick={() => {
                      clearSlot(space);
                    }}
                  >
                    Clear Parking Space
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({ lots: state.reducer.parkingLots });

export default connect(mapStateToProps, { clearLot })(ClearSlot);
