import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/todoReducer";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import style from "./SetTask.module.scss";

const SetTask = () => {
  const [value, setValue] = useState("");
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  const addTodos = () => {
    if (value === "") {
      return;
    } else {
      dispatch(
        addTask({
          id: id,
          title: value,
          completed: false,
        })
      );
      setValue("");
      setId((prev) => prev + 1);
    }
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
      <Fab
        color="primary"
        aria-label="add"
        onClick={addTodos}
        className={style.btnAdd}>
        <AddIcon />
      </Fab>
    </div>
  );
};
export default SetTask;
