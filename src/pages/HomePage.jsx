import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onStatusChange } from "../redux/userDataReducer";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  console.log("HOMEPAGE render");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [tokken, setTokken] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const data = useSelector((user) => user.userData.data.uid);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setId(user.uid);
        setTokken(user.refreshToken);
        dispatch(onStatusChange());
      } else {
        navigate("/login");
      }
    });
  });

  return (
    <div>
      {/* {data} */}
      <h1>{email}</h1>
      <p>{id}</p>
    </div>
  );
};
export default HomePage;
