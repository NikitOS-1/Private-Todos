import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [tokken, setTokken] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setId(user.uid);
        setTokken(user.refreshToken);
      } else {
        navigate("/login");
      }
    });
  });

  return (
    <div>
      {tokken}
      <h1>{email}</h1>
      <p>{id}</p>
    </div>
  );
};
export default HomePage;
