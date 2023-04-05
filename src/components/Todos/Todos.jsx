import { useState } from "react";
import style from "./Todos.module.scss";
import ItemTask from "./ItemTask/ItemTask";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/todoReducer";
import SetTask from "./SetTask/SetTask";
import DescTask from "./DescTask/DescTask";
import TotalTask from "./TotalTask/TotalTask";
import moment from "moment";

const Todos = () => {
  const todo = useSelector((state) => state.todo.tasks);
  const [status, setStatus] = useState("active");
  const [countTask, setCountTask] = useState(0);

  const changeStatusOn = (status) => {
    setStatus(status);
  };

  let dayWeek = moment().format("dddd");
  let MMDYY = moment().format("MMM Do YY");

  return (
    <div className={style.container}>
      <h1>Just do it.</h1>
      <h3>{`${dayWeek}   ${MMDYY}`}</h3>
      <SetTask />
      <DescTask changeStatusOn={changeStatusOn} />
      {todo.map((i, o) => (
        <div key={o}>
          <ItemTask
            id={i.id}
            title={i.title}
            completed={i.completed}
            status={status}
          />
        </div>
      ))}
      <TotalTask />
    </div>
  );
};
export default Todos;
