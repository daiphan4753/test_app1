import React from "react";
import "./index.css";
import { URL_AVATAR_USER_MALE } from "../../constants";
import CardUser from "../../component/CardUser";
import { faPen, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { cutText } from "../../cores";
import { UserData } from "../../data/UserData.js";

export default function User() {
  const showData = UserData.map((value) => (
    <div>
      <CardUser title={"Tên người dùng: "} valueTitle={value.userName} />
      <CardUser title={"Ngày sinh:"} valueTitle={value.birthday} />
      <CardUser title={"Giới tính:"} valueTitle={value.gender} />
      <CardUser title={"Địa chỉ:"} valueTitle={cutText(value.address, 30)} />
      <CardUser title={"SDT:"} valueTitle={value.phone} />
      <CardUser hiddenText title={"CCCD:"} valueTitle={value.CCCD} />
      <CardUser title={"Ngân hàng liên kết:"} valueTitle={value.bank} />
    </div>
  ));
  const dataSummary = UserData.map((value) => (
    <div>
      <p className="margin-block-p">
        Tên người dùng: <span>{value.userName}</span>
      </p>
      <p className="margin-block-p">
        chức vụ: <span>{value.chucVu}</span>
      </p>
      <p className="margin-block-p">
        MNV: <span>{value.maNV}</span>
      </p>
    </div>
  ));
  return (
    <div className="user">
      <div className="user--box-row">
        <div className="user--box-avatar">
          <img className="user--avatar" src={URL_AVATAR_USER_MALE} />
        </div>
        <div className="user--inf">
          {/* <p className="margin-block-p">{userName}</p>
          <p className="margin-block-p">chức vụ: CTV</p>
          <p className="margin-block-p">MNV: 123456abc</p> */}
          {dataSummary}
        </div>
      </div>
      <div className="user--box-column">{showData}</div>
      <div className="user--box-column txtBold">
        <CardUser title={"Thay đổi thông tin"} icon={faPen} />
        <CardUser title={"Đăng xuất"} icon={faRightFromBracket} />
      </div>
    </div>
  );
}
