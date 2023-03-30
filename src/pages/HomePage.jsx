import { Button, LinearProgress } from "@mui/material";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDataUser } from "../redux/userDataReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const { email, id, tokken } = useSelector((state) => state.userData);
  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      signOut(auth);
      navigate("/login");
    }
  });
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
