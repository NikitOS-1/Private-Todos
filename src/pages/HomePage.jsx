import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todos from "../components/Todos/Todos";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setId(user.uid);
        setName(user.displayName);
      } else {
        navigate("/login");
      }
    });
  });

  return (
    <div>
      <Todos name={name} />
    </div>
  );
};
export default HomePage;
