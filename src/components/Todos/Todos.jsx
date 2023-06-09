import style from "./Todos.module.scss";
import ItemTask from "./ItemTask/ItemTask";
import { useSelector } from "react-redux";
import SetTask from "./SetTask/SetTask";
import DescTask from "./DescTask/DescTask";
import TotalTask from "./TotalTask/TotalTask";
import moment from "moment";

const Todos = () => {
  const todo = useSelector((state) => state.todo.tasks);

  let currentDayWeek = moment().format("dddd");
  let currentMMDYY = moment().format("MMM Do YY");

  return (
    <div className={style.container}>
      <h1>
        Just do it <span>.</span>
      </h1>
      <h3>{`${currentDayWeek}   ${currentMMDYY}`}</h3>
      <SetTask />
      <DescTask />
      {todo.map((i, o) => (
        <div key={o}>
          <ItemTask id={i.id} title={i.title} completed={i.completed} />
        </div>
      ))}
      <TotalTask />
    </div>
  );
};
export default Todos;
