import { Tab, Tabs } from "@mui/material";
import style from "./DescTask.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../../redux/filterTodoReducer";

const DescTask = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.wrap}>
      <Tabs className={style.cont} value={value} onChange={handleChange}>
        <Tab
          className={style.btnCompl}
          label="Completed"
          onClick={() => dispatch(filter(true))}
        />
        <Tab
          className={style.btnAct}
          label="Active"
          onClick={() => dispatch(filter(false))}
        />
      </Tabs>
    </div>
  );
};
export default DescTask;
