import { Button, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";
import { useState } from "react";

const Menu = ({ exit, handleChangeTheme }) => {
  const theme = useSelector((state) => state.theme.theme);
  const [email, setEmail] = useState();

  console.log("MENU render");
  return (
    <div className={style.wraper}>
      {email}
      <Switch checked={theme} onChange={handleChangeTheme} color="default" />
      <Button onClick={exit}>Sign Out</Button>
    </div>
  );
};
export default Menu;
