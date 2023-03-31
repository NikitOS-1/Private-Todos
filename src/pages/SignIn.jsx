import FormIN from "../components/Form/FormIN";

const SignIn = () => {
  const login = (email, pass) => {
    console.log("logined");
    console.log(email);
    console.log(pass);
  };
  console.log("SIGNIN render");
  return (
    <div>
      <FormIN clickHandler={login} />
    </div>
  );
};
export default SignIn;
