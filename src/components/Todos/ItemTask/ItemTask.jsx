import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./ItemTask.module.scss";

const ItemTask = ({ task }) => {
  return (
    <div>
      <Checkbox />
      {task}
      <DeleteIcon />
    </div>
  );
};
export default ItemTask;
