import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
        setTasks(task => [...task, newTask]);
        setNewTask("");
    }
    
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index ]];
        setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index ]];
        setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <span className="text"> {tasks} </span>
            <button 
                className="delete-button"
                onClick={()=>deleteTask(index)}>
                Delete
            </button>
            <button 
                className="move-button"
                onClick={()=>moveTaskUp(index)}>
                Up
            </button>
            <button 
                className="move-button"
                onClick={()=>moveTaskDown(index)}>
                Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
