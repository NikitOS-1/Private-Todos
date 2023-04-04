import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemTodo = ({ task }) => {
  return (
    <div>
      <Checkbox />
      {task}
      <DeleteIcon />
    </div>
  );
};
export default ItemTodo;
