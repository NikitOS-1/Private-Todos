import { useState } from "react";
import style from "./TotalTask.module.scss";

const TotalTask = () => {
  const [count, setCount] = useState(1);
  return <div className={style.total}>You have {count} Task</div>;
};

export default TotalTask;
