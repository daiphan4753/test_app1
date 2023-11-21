import React, { useState } from "react";
import "./index.css";
import HeaderCustom from "../../component/HeaderCustom";

export default function Product() {
  const [findProduct, setFindProduct] = useState();
  const click = (e) => {
    console.log(findProduct);
  };
  return (
    <div className="product">
      <HeaderCustom
        value={findProduct}
        onChange={(e) => setFindProduct(e.target.value)}
        placeholder={"Nhập nội dung tìm kiếm"}
        onClick={click}
      />
    </div>
  );
}
