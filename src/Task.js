export function Task({ task, deleteTask, changeComplete }) {
  return (
    <div
      className="task"
      style={{ background: task.isCompleted ? "green" : "white" }}
    >
      <h2>{task.taskName}</h2>
      <button onClick={() => changeComplete(task)}>Completed</button>
      <button onClick={() => deleteTask(task)}>X</button>
    </div>
  );
}
