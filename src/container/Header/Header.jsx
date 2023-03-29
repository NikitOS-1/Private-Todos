import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { isDay } from "../../redux/themeReducer";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChange = () => {
    theme ? dispatch(isDay(false)) : dispatch(isDay(true));
  };

  return (
    <div>
      <Switch checked={theme} onChange={handleChange} />
    </div>
  );
};
export default Header;
