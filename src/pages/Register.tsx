import React, { ChangeEventHandler, useState } from "react";
import { connect } from "react-redux";

import styles from "./Register.module.scss";
import { register } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";

type Props = {
  register: Function;
  lots: any;
};

const Register = ({ register, lots }: Props) => {
  const [reg, setReg] = useState("");
  const navigate = useNavigate();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setReg(e.target.value);
  };

  const handleOnSumbit = () => {
    register(reg, lots);
    navigate("/");
  };

  return (
    <div>
      <form>
        <input
          id="parking-drawing-registration-input"
          onChange={handleInputChange}
          value={reg}
          placeholder="Enter Vehicle number"
          aria-label="registration input"
        />
        <button
          data-testid="submitBtn"
          id="parking-drawing-add-car-button"
          disabled={!reg}
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

export default connect(mapStateToProps, { register })(Register);
