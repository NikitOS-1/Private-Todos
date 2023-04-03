import style from "./Todos.module.scss";

const Todos = ({ name }) => {
  return (
    <div>
      <h1>
        Just do it. <span>{name}</span>
      </h1>
    </div>
  );
};
export default Todos;
