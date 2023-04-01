import { useNavigate } from "react-router-dom";
import FormIN from "../components/Form/FormIN";

const SignIn = () => {
  const navigate = useNavigate();
  const login = (email, pass) => {
    console.log("logined");
    console.log(email);
    console.log(pass);
    navigate("/");
  };
  console.log("SIGNIN render");
  return (
    <div>
      <FormIN clickHandler={login} />
    </div>
  );
};
export default SignIn;
