import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { isDay } from "../../redux/themeReducer";
import style from "./Menu.module.scss";

const Menu = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChange = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };
  return (
    <div className={style.menu}>
      <Switch checked={theme} onChange={handleChange} color="default" />
    </div>
  );
};
export default Menu;
