import React, { useEffect, useState } from "react";
import "./index.css";
import InputCustom from "../../component/InputCustom";
import { URL_LOGO_MTT } from "../../constants";
import Splash from "../Splash";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setLoading] = useState(true);
  const handleClick = () => {
    console.log(userName, " va ", password);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <div className="login">
      <div className="login-logo">
        <img src={URL_LOGO_MTT} className="login--logo" />
      </div>
      <div className="login-input">
        <InputCustom
          type={"text"}
          value={userName}
          placeHolder={"Nhập Username"}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputCustom
          type={"text"}
          placeHolder={"Nhập Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleClick}>
          Đăng nhập
        </button>
        <div className="login--foget-password">
          <button className="foget-btn" onClick={console.log("qunê pass")}>
            Quên mật khẩu?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
