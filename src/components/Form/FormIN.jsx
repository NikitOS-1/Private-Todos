import style from "./Form.module.scss";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const FormIN = ({ clickHandler }) => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPass, setCurrentPass] = useState("");
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
        onClick={() => clickHandler(currentEmail, currentPass)}>
        SIGN IN
      </Button>
      <div className={style.signup}>
        <span>DON'T HAVE AN ACCOUNT?</span> <Link to="/sign-up">SIGN UP</Link>
      </div>
    </div>
  );
};
export default FormIN;
