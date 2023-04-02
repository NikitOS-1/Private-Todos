import style from "./Header.module.scss";
import Menu from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { isDay } from "../../redux/themeReducer";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChangeTheme = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };

  const exit = () => {
    signOut(auth);
    navigate("/login");
  };

  console.log("HEADER render");
  return (
    <header className={style.wrap}>
      <Menu exit={exit} handleChangeTheme={handleChangeTheme} />
    </header>
  );
};
export default Header;
