import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import style from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@mui/material";
import { isDay } from "./redux/themeReducer";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const handleChange = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };

  return (
    <div
      className={[
        style["wrap"],
        `${theme ? style["day"] : style["night"]}`,
      ].join(" ")}>
      <Switch checked={theme} onChange={handleChange} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
