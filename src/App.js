import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import style from "./App.module.scss";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={[
        style["wrap"],
        `${theme ? style["day"] : style["night"]}`,
      ].join(" ")}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
