import style from "./Header.module.scss";
import Menu from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { addDataUser } from "../../redux/userDataReducer";
import { useEffect } from "react";
import { isDay } from "../../redux/themeReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const theme = useSelector((state) => state.theme.theme);

  const handleChangeTheme = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };

  const exit = () => {
    dispatch(
      addDataUser({
        email: null,
        id: null,
        tokken: null,
        display: false,
      })
    );
    signOut(auth);
  };
  return (
    <header className={style.wrap}>
      <Menu exit={exit} handleChangeTheme={handleChangeTheme} />
    </header>
  );
};
export default Header;
