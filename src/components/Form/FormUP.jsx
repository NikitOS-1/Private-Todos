import style from "./Form.module.scss";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const FormUP = ({ error, clickHandler }) => {
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPass, setCurrentPass] = useState("");

  return (
    <div className={style.wrap}>
      <PersonAddAlt1Icon className={style.imgAccount} />
      <TextField
        error={!error ? false : true}
        label={<PersonIcon />}
        variant="standard"
        type="text"
        className={style.itemInput}
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
      />
      <TextField
        error={!error ? false : true}
        label={<EmailIcon />}
        variant="standard"
        type="email"
        className={style.itemInput}
        value={currentEmail}
        onChange={(e) => setCurrentEmail(e.target.value)}
      />
      <TextField
        error={!error ? false : true}
        label={<HttpsIcon />}
        variant="standard"
        type="password"
        className={style.itemInput}
        value={currentPass}
        onChange={(e) => setCurrentPass(e.target.value)}
      />
      <p style={{ color: "red", fontWeight: "900" }}>
        {!error ? "" : "You entered incorrect information"}
      </p>
      <Button
        variant="outlined"
        className={style.btn}
        color="inherit"
        onClick={() => clickHandler(currentEmail, currentPass, currentName)}>
        SIGN UP
      </Button>
      <div className={style.signup}>
        <span>IF YOU HAVE AN ACCOUNT YET?</span>{" "}
        <Link to="/login">SIGN IN</Link>
      </div>
    </div>
  );
};

export default FormUP;
