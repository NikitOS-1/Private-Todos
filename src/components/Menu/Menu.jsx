import { Button, LinearProgress, Switch } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isDay } from "../../redux/themeReducer";
import { addDataUser } from "../../redux/userDataReducer";
import style from "./Menu.module.scss";

const Menu = () => {
  const [display, setDisplay] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const theme = useSelector((state) => state.theme.theme);
  const { email } = useSelector((state) => state.userData);

  const handleChangeTheme = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };

  const exit = () => {
    signOut(auth);
    dispatch(
      addDataUser({
        email: null,
        id: null,
        tokken: null,
      })
    );
    navigate("/login");
  };

  return (
    <div className={style.menu}>
      <Switch checked={theme} onChange={handleChangeTheme} color="default" />
      <div className={style.userInfo}>
        <h3
          className={[`${display ? style["show"] : style["hide"]}`].join(" ")}>
          Hello {email}!
        </h3>

        <Button
          className={[`${display ? style["show"] : style["hide"]}`].join(" ")}
          onClick={exit}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};
export default Menu;
