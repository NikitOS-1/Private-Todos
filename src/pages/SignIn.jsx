import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { addDataUser } from "../redux/userDataReducer";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const { email, id, tokken } = useSelector((state) => state.userData);
  const signIn = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        dispatch(
          addDataUser({
            email: user.email,
            id: user.uid,
            tokken: user.refreshToken,
            display: true,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "" + errorMessage);
      });
  };
  useEffect(() => {
    if (tokken) {
      navigate("/");
    }
  }, [tokken]);
  return (
    <div>
      <Form type="signIn" clickHandler={signIn} />
    </div>
  );
};
export default SignIn;
