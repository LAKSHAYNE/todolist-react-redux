import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Input from "./components/input";
import Todoitem from "./components/Todoitem";
import { selectTodoList } from "./features/todoSlice";


function App() {
  const todoList=useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <Todoitem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
