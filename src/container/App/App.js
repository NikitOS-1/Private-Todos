import style from "./App.module.scss";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  console.log("APP render");
  return (
    <div
      className={[
        style["wrap"],
        `${theme ? style["day"] : style["night"]}`,
      ].join(" ")}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
