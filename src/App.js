import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import NoPage from "./screen/NoPage";
import Product from "./Fragments/Product";
import Order from "./Fragments/Order";
import Statistic from "./Fragments/Statistic";
import User from "./Fragments/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
export default App;
