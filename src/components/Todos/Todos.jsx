import { useState } from "react";
import style from "./Todos.module.scss";
import ItemTodo from "./ItemTodo/ItemTodo";

const Todos = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const addTodos = () => {
    setTodo((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <div>
      <h1>Just do it.</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button onClick={addTodos}>Add</button>
      </div>
      <div>
        {todo.map((i) => (
          <div key={i}>
            <ItemTodo task={i} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todos;
