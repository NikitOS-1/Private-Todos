import { Button, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

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
      <div className={style.hidenMenu}>
        <AccountCircleIcon className={style.icon} />
        <div className={style.menu}>
          <ul>
            <li>{status ? "You are logged in as: " + email : ""}</li>
            <li>{status ? <Button onClick={exit}>Sign Out</Button> : ""}</li>
            <li>{status ? "" : <Link to="/login">SIGN IN</Link>}</li>
            <li>{status ? "" : <Link to="/sign-up">SIGN UP</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
