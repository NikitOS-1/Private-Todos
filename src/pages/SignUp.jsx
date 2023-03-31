import FormUP from "../components/Form/FormUP";

const SignUp = () => {
  const logout = (email, pass, name) => {
    console.log("register");
    console.log(email);
    console.log(pass);
    console.log(name);
  };
  console.log("SIGNUP render");
  return (
    <div>
      <FormUP clickHandler={logout} />
    </div>
  );
};
export default SignUp;
