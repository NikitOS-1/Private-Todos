import { Route, Routes } from "react-router-dom";
import SingIn from "../../pages/SingIn";
import SingUp from "../../pages/SingUp";
import HomePage from "../../pages/HomePage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/sing-up" element={<SingUp />} />
      </Routes>
    </main>
  );
};

export default Main;
