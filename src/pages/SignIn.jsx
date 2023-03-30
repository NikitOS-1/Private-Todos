import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { addDataUser } from "../redux/userDataReducer";

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useNavigate();
  const auth = getAuth();

  const signIn = (email, pass) => {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "" + errorMessage);
      });
  };

  return (
    <div>
      <Form type="signIn" clickHandler={signIn} />
    </div>
  );
};
export default SignIn;
