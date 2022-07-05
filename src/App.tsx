import styles from "./App.module.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateSlot from "./pages/CreateSlot";
import Register from "./pages/Register";
import ClearSlot from "./pages/ClearSlot";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Link className={styles.header} to="/">
        Parking Space App
      </Link>
      <div className={styles.appContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CreateSlot" element={<CreateSlot />} />
          <Route path="Register" element={<Register />} />
          <Route path="ClearSlot" element={<ClearSlot />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
