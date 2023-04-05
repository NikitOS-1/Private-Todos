import { Checkbox, Fab, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./ItemTask.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, changeStatus } from "../../../redux/todoReducer";

const ItemTask = ({ id, completed, title, status }) => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    dispatch(
      changeStatus({
        id: id,
        completed: isCompleted,
      })
    );
  }, [isCompleted]);

  if (status === "completed") {
    if (isCompleted === true) {
      return (
        <div className={style.wrap}>
          <Checkbox
            className={style.check}
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <p className={style.title}>{title}</p>
          <Tooltip title="Delete" className={style.btnDel}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      );
    }
  } else if (status === "active") {
    if (isCompleted === false) {
      return (
        <div className={style.wrap}>
          <Checkbox
            className={style.check}
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <p className={style.title}>{title}</p>
          <Tooltip title="Delete" className={style.btnDel}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      );
    }
  }
};
export default ItemTask;
