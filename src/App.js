import { useState } from "react";
import "./App.css";
import { Task } from "./Task";
function App() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false,
    };
    setList([...list, task]);
  }
  function deleteTask(task) {
    const newList = list.filter((item) => item.id !== task.id);
    setList(newList);
  }
  function changeComplete(task) {
    setList(
      list.map((item) => {
        if (item.id === task.id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <div className="App">
        <div className="addTask">
          <input type="text" onChange={handleChange}></input>
          <button onClick={addTask}>Add task</button>
        </div>
        <div className="list">
          {list.map((task) => {
            return (
              <Task
                task={task}
                deleteTask={deleteTask}
                changeComplete={changeComplete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
