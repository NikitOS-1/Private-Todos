import style from "./Form.module.scss";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Form = ({ type, singIn }) => {
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPass, setCurrentPass] = useState("");

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
          onClick={singIn(currentEmail, currentPass)}>
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
