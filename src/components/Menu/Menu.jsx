import { Button, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Menu = ({ exit, handleChangeTheme }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const theme = useSelector((state) => state.theme.theme);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setStatus("ok");
      } else {
        setEmail(null);
        setStatus(null);
      }
    });
  });
  return (
    <div className={style.wraper}>
      <Switch checked={theme} onChange={handleChangeTheme} color="default" />
      {status ? "You are logged in as: " + email : ""}
      {status ? <Button onClick={exit}>Sign Out</Button> : ""}
    </div>
  );
};
export default Menu;
