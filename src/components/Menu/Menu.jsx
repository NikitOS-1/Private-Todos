import { Button, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";

const Menu = ({ exit, handleChangeTheme }) => {
  const theme = useSelector((state) => state.theme.theme);
  const { email, display } = useSelector((state) => state.userData);
  console.log("MENU render");
  return (
    <div className={style.wraper}>
      <Switch checked={theme} onChange={handleChangeTheme} color="default" />
      <h3>Hello {email}</h3>
      <Button onClick={exit}>Sign Out</Button>
    </div>
  );
};
export default Menu;
