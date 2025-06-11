import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import Todoitemss from "./component/Todoitemss";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  

  let [todoItems,setTodoItems]= useState([]);

  const addNewItem=(itemName,itemDate)=>{
    
      
      setTodoItems((currValue) => {
        const newTodoItems=[...currValue,
        {name: itemName , dueDate: itemDate},
      ];
      return newTodoItems;
        

      });
  };

  const deleteItem=(todoItemName)=>{
    const newTodoItems = todoItems.filter(item => item.name !==todoItemName);
    setTodoItems(newTodoItems);

  };

  return (
    <TodoItemsContext.Provider 
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
    <div className="todo-container">
      <AppName></AppName>
      <Addtodo ></Addtodo>
      <Todoitemss ></Todoitemss>
      <WelcomeMessage ></WelcomeMessage>
      
    </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
