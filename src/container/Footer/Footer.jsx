import style from "./Footer.module.scss";

const Footer = () => {
  console.log("FOOTER render");
  return (
    <footer>
      <div className={style.after}>© 2023 Private Todos. Nikita Puzyrenko</div>
    </footer>
  );
};

export default Footer;
