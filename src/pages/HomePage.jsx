import { Button, LinearProgress } from "@mui/material";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDataUser } from "../redux/userDataReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, id, tokken } = useSelector((state) => state.userData);
  const auth = getAuth();
  console.log(auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("exit");
      return navigate("/login");
    }
  });
  // useEffect(() => {
  //   if (currentUsers === null || undefined) {
  //     return navigate("/login");
  //   }
  // }, []);
  return (
    <div>
      {email}
      <br />
      {id}
      <br />
      {tokken}
    </div>
  );
};
export default HomePage;
