import {  useLocation } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "../../Fragments/Product";
import Order from "../../Fragments/Order";
import Statistic from "../../Fragments/Statistic";
import User from "../../Fragments/User";
import {
  faHouse,
  faCartPlus,
  faChartSimple,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [value, setValue] = useState();
  const sizeIcon = "lg";
  const location = useLocation();
  return (
    <div>
      {value === "product" ? (
        <Product />
      ) : value === "order" ? (
        <Order />
      ) : value === "statistic" ? (
        <Statistic />
      ) : value === "user" ? (
        <User />
      ) : null}
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
          value="product"
          //onClick={() => (window.location = "?page=product")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faHouse} />}
        />
        <BottomNavigationAction
          value="order"
          //onClick={() => (window.location.href = "/?page=order")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faCartPlus} />}
        />
        <BottomNavigationAction
          value="statistic"
          //onClick={() => (window.location.href = "/?page=statistic")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faChartSimple} />}
        />
        <BottomNavigationAction
          value="user"
          //onClick={() => (window.location.href = "/?page=user")}
          icon={<FontAwesomeIcon size={sizeIcon} icon={faUser} />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Home;
