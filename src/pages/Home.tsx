import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { connect } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/CreateSlot");
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  const handleClear = () => {
    navigate("/ClearSlot");
  };

  // useEffect(() => {
  //   console.log(lots);
  // });

  return (
    <div>
      <div>
        <div className="editCell">
          <button data-testid="createBtn" className="buttonAlignRight" onClick={handleCreate}>
            Create Spaces
          </button>
        </div>
        <div>
          <button data-testid="registerBtn" className={`${styles.submitButton}`} onClick={handleRegister}>
            Register Vehicles
          </button>
        </div>
        <div>
          <button data-testid="clearBtn" className={`${styles.submitButton}`} onClick={handleClear}>
            Cleat Spaces
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
