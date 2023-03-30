import { Button } from "@mui/material";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const { email, id, tokken } = useSelector((state) => state.userData);
  console.log(email);
  console.log(id);
  console.log(tokken);
  const exit = () => {
    signOut(auth);
    navigate("/login");
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      navigate("/login");
    }
  });
  return (
    <div>
      <Button onClick={exit}>EXIT</Button>
    </div>
  );
};
export default HomePage;
