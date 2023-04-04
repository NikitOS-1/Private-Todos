import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/todoReducer";

const SetTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addTodos = () => {
    dispatch(addTask(value));
    setValue("");
  };

  return (
    <div>
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
    </div>
  );
};
export default SetTask;
