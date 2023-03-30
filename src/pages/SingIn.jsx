import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { addDataUser } from "../redux/userDataReducer";

const SingIn = () => {
  const dispatch = useDispatch();
  const location = useNavigate();
  const auth = getAuth();

  const singIn = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user);
        dispatch(
          addDataUser({
            email: user.email,
            id: user.uid,
            tokken: user.refreshToken,
          })
        );
        location("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "" + errorMessage);
      });
  };

  return (
    <div>
      <Form type="singIn" clickHandler={singIn} />
    </div>
  );
};
export default SingIn;
