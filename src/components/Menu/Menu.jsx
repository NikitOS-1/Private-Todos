import { Button, LinearProgress, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";

const Menu = ({ exit, handleChangeTheme }) => {
  const theme = useSelector((state) => state.theme.theme);
  const { email, display } = useSelector((state) => state.userData);
  return (
    <div className={style.menu}>
      <Switch checked={theme} onChange={handleChangeTheme} color="default" />

      <div className={style.userInfo}>
        <h3
          className={[`${display ? style["show"] : style["hide"]}`].join(" ")}>
          Hello {email}!
        </h3>
        <Button onClick={exit}>Sign Out</Button>
      </div>
    </div>
  );
};
export default Menu;
