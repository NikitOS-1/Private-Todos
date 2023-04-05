import { Tab, Tabs } from "@mui/material";
import style from "./DescTask.module.scss";
import { useState } from "react";

const DescTask = ({ changeStatusOn }) => {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.wrap}>
      <Tabs className={style.cont} value={value} onChange={handleChange}>
        <Tab
          className={style.btnAct}
          label="Active"
          onClick={() => changeStatusOn("active")}
        />
        <Tab
          className={style.btnCompl}
          label="Completed"
          onClick={() => changeStatusOn("completed")}
        />
      </Tabs>
    </div>
  );
};
export default DescTask;
