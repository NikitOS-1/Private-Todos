import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import HomePage from "../../pages/HomePage";

const Main = () => {
  return (
    <main style={{ width: "100%" }}>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default Main;
