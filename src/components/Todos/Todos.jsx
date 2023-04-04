import { useState } from "react";
import style from "./Todos.module.scss";
import ItemTask from "./ItemTask/ItemTask";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/todoReducer";
import SetTask from "./SetTask/SetTask";
import DescTask from "./DescTask/DescTask";

const Todos = () => {
  const todo = useSelector((state) => state.todo.tasks);

  return (
    <div className={style.container}>
      <h1>Just do it.</h1>
      <SetTask />
      <DescTask />
      {todo.map((i, o) => (
        <div key={o}>
          <ItemTask id={i.id} title={i.title} completed={i.completed} />
        </div>
      ))}
    </div>
  );
};
export default Todos;
