import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Product from "./screen/Product";
import Order from "./screen/Order";
import Statistic from "./screen/Statistic";
import User from "./screen/User";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("home");
  const nav = useNavigate();
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
          value="home"
          label="Trang chủ"
          onClick={() => nav("/home")}
        />
        <BottomNavigationAction
          value="order"
          label="Đơn hàng"
          onClick={() => nav("/order")}
        />
        <BottomNavigationAction
          value="statistic"
          label="Thống kê"
          onClick={() => nav("/statistic")}
        />
        <BottomNavigationAction
          value="User"
          label="Tôi"
          onClick={() => nav("/user")}
        />
      </BottomNavigation>
    </div>
  );
}

export default App;
