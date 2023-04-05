import { useEffect, useState } from "react";
import style from "./TotalTask.module.scss";
import { useSelector } from "react-redux";

const TotalTask = () => {
  const todo = useSelector((state) => state.todo.tasks);
  const [countTasks, SetCountTasks] = useState(0);
  useEffect(() => {
    SetCountTasks(todo.length);
  }, [todo]);
  const [count, setCount] = useState(1);

  return (
    <div className={style.total}>You have {countTasks} tasks in total</div>
  );
};

export default TotalTask;
