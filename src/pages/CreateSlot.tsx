import React, { ChangeEventHandler, useEffect, useState } from "react";
import styles from "./CreateSlot.module.scss";
import { createSlots } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

type Props = {
  createSlots: Function;
  lots: any;
};

const CreateSlot = ({ createSlots, lots }: Props) => {
  const [spaces, setSpaces] = useState("");
  const navigate = useNavigate();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSpaces(e.target.value);
  };
  const handleOnSumbit = () => {
    createSlots(spaces);
    navigate("/");
  };

  return (
    <div>
      <form>
        <input
          id="parking-create-text-input"
          onChange={handleInputChange}
          value={spaces}
          placeholder="Enter a number"
          aria-label="spaces input"
        />
        <button
          data-testid="submitBtn"
          id="parking-create-submit-button"
          disabled={!spaces}
          className={`${styles.submitButton} `}
          onClick={handleOnSumbit}
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ lots: state.reducer.parkingLots });

export default connect(mapStateToProps, { createSlots })(CreateSlot);
