import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import Todoitemss from "./component/Todoitemss";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
function App() {
  

  let [todoItems,setTodoItems]= useState([]);

  const handleNewItems=(itemName,itemDate)=>{
    console.log(`New Item Added: ${itemName}
      date: ${itemDate}`);
      const newTodoItems=[...todoItems,
        {name: itemName , dueDate: itemDate},
      ];
      setTodoItems(newTodoItems);
  };


  return (
    <div className="todo-container">
      <AppName></AppName>
      <Addtodo onNewItem={handleNewItems}></Addtodo>
      <Todoitemss todoItems={todoItems}></Todoitemss>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      
    </div>
  );
}

export default App;
