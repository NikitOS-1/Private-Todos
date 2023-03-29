import style from "./Header.module.scss";
import Menu from "../../components/Menu/Menu";

const Header = () => {
  return (
    <header className={style.wrap}>
      <Menu />
    </header>
  );
};
export default Header;
