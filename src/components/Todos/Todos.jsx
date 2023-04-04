import { useState } from "react";
import style from "./Todos.module.scss";
import ItemTask from "./ItemTask/ItemTask";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/todoReducer";
import SetTask from "./SetTask/SetTask";

const Todos = () => {
  const todo = useSelector((state) => state.todo.tasks);
  return (
    <div>
      <h1>Just do it.</h1>
      <SetTask />
      {todo.map((i) => (
        <div key={i}>
          <ItemTask task={i} />
        </div>
      ))}
    </div>
  );
};
export default Todos;
