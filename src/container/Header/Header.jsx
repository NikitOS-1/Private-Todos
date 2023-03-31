import style from "./Header.module.scss";
import Menu from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { isDay } from "../../redux/themeReducer";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const handleChangeTheme = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };
  const exit = () => {};

  console.log("HEADER render");
  return (
    <header className={style.wrap}>
      <Menu exit={exit} handleChangeTheme={handleChangeTheme} />
    </header>
  );
};
export default Header;
