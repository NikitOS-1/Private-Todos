import { Button, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Menu = ({ exit, handleChangeTheme }) => {
  const [email, setEmail] = useState("");
  const theme = useSelector((state) => state.theme.theme);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
      }
    });
  });
  return (
    <div className={style.wraper}>
      <Switch checked={theme} onChange={handleChangeTheme} color="default" />
      {email}
      <Button onClick={exit}>Sign Out</Button>
    </div>
  );
};
export default Menu;
