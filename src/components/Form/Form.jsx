import { Button, TextField } from "@mui/material";
import style from "./Form.module.scss";
// ---------icons---------
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className={style.wrap}>
      <AccountCircleIcon className={style.imgAccount} />
      <TextField
        id="standard-basic"
        label={<EmailIcon />}
        variant="standard"
        type="email"
        className={style.itemInput}
      />
      <TextField
        id="standard-basic"
        label={<HttpsIcon />}
        variant="standard"
        type="password"
        className={style.itemInput}
      />

      <Button variant="outlined" className={style.btn} color="inherit">
        SING IN
      </Button>
      <div className={style.singup}>
        <span>DON'T HAVE AN ACCOUNT?</span> <Link to="/sing-up">SING UP</Link>
      </div>
    </div>
  );
};
export default Form;
