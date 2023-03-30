import style from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { addDataUser } from "../../redux/userDataReducer";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const theme = useSelector((state) => state.theme.theme);

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      signOut(auth);
      navigate("/login");
    } else {
      dispatch(
        addDataUser({
          email: user.email,
          id: user.uid,
          tokken: user.refreshToken,
        })
      );
    }
  });

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
