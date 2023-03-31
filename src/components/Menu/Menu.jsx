import { Button, LinearProgress, Switch } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";

const Menu = ({ exit, handleChangeTheme }) => {
  const theme = useSelector((state) => state.theme.theme);
  const { email, display } = useSelector((state) => state.userData);
  const [isActive, setIsActive] = useState(false);

  // const hamburger = document.querySelector(".hamburger-menu");
  // const menu = document.querySelector(".menu");

  // hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("active");
  //   menu.classList.toggle("active");
  // });
  const show = () => {
    isActive
      ? setIsActive((prev) => (prev = false))
      : setIsActive((prev) => (prev = true));
  };

  return (
    <div className={style.wraper}>
      <nav>
        <div
          className={[
            style["hamburgerMenu"],
            `${isActive ? style["active"] : style[""]}`,
          ].join(" ")}
          onClick={show}>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
        </div>
        <ul
          className={[
            style["menu"],
            `${isActive ? style["active"] : style[""]}`,
          ].join(" ")}>
          <li>
            <Switch
              checked={theme}
              onChange={handleChangeTheme}
              color="default"
            />
          </li>
          <li>
            <h3
              className={[`${display ? style["show"] : style["hide"]}`].join(
                " "
              )}>
              Hello {email}!
            </h3>
          </li>
          <li>
            <Button onClick={exit}>Sign Out</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
