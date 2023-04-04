import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./ItemTask.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, changeStatus } from "../../../redux/todoReducer";

const ItemTask = ({ id, completed, title }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleChange = () => {
    setIsCompleted(completed);
    dispatch(
      changeStatus({
        id: id,
        completed: true,
      })
    );
  };
  console.log(isCompleted);
  return (
    <div>
      <Checkbox checked={isCompleted} onChange={handleChange} />
      {title}
      <DeleteIcon />
    </div>
  );
};
export default ItemTask;
