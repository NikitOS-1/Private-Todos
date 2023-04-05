import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/todoReducer";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import style from "./SetTask.module.scss";

const SetTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addTodos = () => {
    dispatch(
      addTask({
        id: Math.floor(Math.random() * 9999999999),
        title: value,
        completed: false,
      })
    );
    setValue("");
  };

  return (
    <div className={style.wrap}>
      <input
        type="text"
        placeholder="Add a task."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <Fab color="primary" aria-label="add" onClick={addTodos}>
        <AddIcon />
      </Fab>
    </div>
  );
};
export default SetTask;
