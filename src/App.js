import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Product from "./screen/Product";
import Order from "./screen/Order";
import Statistic from "./screen/Statistic";
import User from "./screen/User";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
  faHouse,
  faCartPlus,
  faChartSimple,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [value, setValue] = useState();
  const nav = useNavigate();
  const sizeIcon = "lg";
  const location = useLocation().pathname;
  useEffect(() => {
    console.log(location, value);
    if (value == undefined || value == null){
      setValue(location);
    }
  }, [location]);
  return (
    <div className="App">
      <Routes>
        <Route index path="" element={<Product />} />
        <Route path="/home" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <BottomNavigation
        showLabels={true}
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        }}
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <BottomNavigationAction
          value="/home"
          onClick={() => nav("/home")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faHouse} />}
        />
        <BottomNavigationAction
          value="/order"
          onClick={() => nav("/order")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faCartPlus} />}
        />
        <BottomNavigationAction
          value="/statistic"
          onClick={() => nav("/statistic")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faChartSimple} />}
        />
        <BottomNavigationAction
          value="/user"
          onClick={() => nav("/user")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faUser} />}
        />
      </BottomNavigation>
    </div>
  );
}

export default App;
