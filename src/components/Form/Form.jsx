import style from "./Form.module.scss";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

const Form = ({ type }) => {
  const dispatch = useDispatch();
  const location = useNavigate();
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPass, setCurrentPass] = useState("");

  const auth = getAuth();
  console.log(auth);
  const singIn = () => {
    signInWithEmailAndPassword(auth, currentEmail, currentPass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      }, location("/"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "" + errorMessage);
      });
  };
  if (type == "singIn") {
    return (
      <div className={style.wrap}>
        <AccountCircleIcon className={style.imgAccount} />
        <TextField
          label={<EmailIcon />}
          variant="standard"
          type="email"
          className={style.itemInput}
          value={currentEmail}
          onChange={(e) => setCurrentEmail(e.target.value)}
        />
        <TextField
          label={<HttpsIcon />}
          variant="standard"
          type="password"
          className={style.itemInput}
          value={currentPass}
          onChange={(e) => setCurrentPass(e.target.value)}
        />

        <Button
          variant="outlined"
          className={style.btn}
          color="inherit"
          onClick={singIn}>
          SING IN
        </Button>
        <div className={style.singup}>
          <span>DON'T HAVE AN ACCOUNT?</span> <Link to="/sing-up">SING UP</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.wrap}>
        <PersonAddAlt1Icon className={style.imgAccount} />
        <TextField
          label={<PersonIcon />}
          variant="standard"
          type="text"
          className={style.itemInput}
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
        />
        <TextField
          label={<EmailIcon />}
          variant="standard"
          type="email"
          className={style.itemInput}
          value={currentEmail}
          onChange={(e) => setCurrentEmail(e.target.value)}
        />
        <TextField
          label={<HttpsIcon />}
          variant="standard"
          type="password"
          className={style.itemInput}
          value={currentPass}
          onChange={(e) => setCurrentPass(e.target.value)}
        />
        <Button variant="outlined" className={style.btn} color="inherit">
          SING UP
        </Button>
        <div className={style.singup}>
          <span>IF YOU HAVE AN ACCOUNT?</span> <Link to="/login">SING IN</Link>
        </div>
      </div>
    );
  }
};
export default Form;
