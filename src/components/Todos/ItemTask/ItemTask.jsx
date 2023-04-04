import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./ItemTask.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, changeStatus } from "../../../redux/todoReducer";

const ItemTask = ({ id, completed, title }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeStatus({
        id: id,
        completed: isCompleted,
      })
    );
  }, [isCompleted]);

  return (
    <div>
      <Checkbox
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      {title}
      <DeleteIcon />
    </div>
  );
};
export default ItemTask;
