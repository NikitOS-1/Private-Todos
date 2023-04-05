const DescTask = ({ changeStatusOn }) => {
  return (
    <div>
      <button onClick={() => changeStatusOn("active")}>Active</button>
      <button onClick={() => changeStatusOn("completed")}>Completed</button>
    </div>
  );
};
export default DescTask;
