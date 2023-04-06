import { useNavigate } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import FormIN from "../components/Form/FormIN";
import { useEffect, useState } from "react";

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const d = useNavigate();
  const [error, setError] = useState("");

  const login = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <FormIN error={error} clickHandler={login} />
    </div>
  );
};
export default SignIn;
