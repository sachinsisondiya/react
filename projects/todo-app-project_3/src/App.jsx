import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import Todoitemss from "./component/Todoitemss";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2025",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2025",
    },
     {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  let [todoItems,setTodoItems]= useState(initialTodoItems);

  const handleNewItems=(itemName,itemDate)=>{
    console.log(`New Item Added: ${itemName}
      date: ${itemDate}`);
  }


  return (
    <div className="todo-container">
      <AppName></AppName>
      <Addtodo onNewItem={handleNewItems}></Addtodo>
      <Todoitemss todoItems={todoItems}></Todoitemss>
      
    </div>
  );
}

export default App;
