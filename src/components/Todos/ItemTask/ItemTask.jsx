import { Checkbox, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./ItemTask.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, deleteTask } from "../../../redux/todoReducer";

const ItemTask = ({ id, completed, title }) => {
  const filter = useSelector((state) => state.filterTodo.currentFilter);
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    dispatch(
      changeStatus({
        id: id,
        completed: isCompleted,
      })
    );
  }, [isCompleted, dispatch, id]);

  if (!filter && !completed) {
    return (
      <div className={style.wrap}>
        <Checkbox
          className={style.check}
          checked={false}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />

        <p className={style.title}>{title}</p>

        <Tooltip
          title="Delete"
          className={style.btnDel}
          onClick={() => dispatch(deleteTask(id))}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  } else if (filter && completed) {
    return (
      <div className={style.wrap}>
        <Checkbox
          className={style.check}
          checked={true}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />

        <p style={{ color: "black" }} className={style.title}>
          {title}
        </p>

        <Tooltip
          title="Delete"
          className={style.btnDel}
          onClick={() => dispatch(deleteTask(id))}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
};

export default ItemTask;
