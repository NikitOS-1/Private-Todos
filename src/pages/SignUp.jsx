import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import FormUP from "../components/Form/FormUP";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const register = (email, pass, user) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  });

  return (
    <div>
      <FormUP error={error} clickHandler={register} />{" "}
    </div>
  );
};
export default SignUp;
