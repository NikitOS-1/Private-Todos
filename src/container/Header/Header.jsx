import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { isDay } from "../../redux/themeReducer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChange = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };

  return (
    <header className={style.wrap}>
      <div className={style.menu}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Switch checked={theme} onChange={handleChange} color="default" />
      </div>
    </header>
  );
};
export default Header;
