import React from "react";
import "./index.css";
import { NAME_MTT, COPY_RIGHT_MTT } from "../../constants";

export default function Splash() {
  return (
    <div className="splash">
      <div className="splash--box-title">
        <h2 className="splash-h1">{NAME_MTT}</h2>
        <h4 className="splash-h3">Cộng tác viên</h4>
        <div className="splash--box-loading">
          <div class="balls">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="splash--box-copyright">
        <h6 className="splash-copyright">{COPY_RIGHT_MTT}</h6>
      </div>
    </div>
  );
}
