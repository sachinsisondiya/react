import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import Todoitemss from "./component/Todoitemss";
import "./App.css";
function App() {
  const todoItems = [
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
                    // 4:14 
  return (
    <div className="todo-container">
      <AppName></AppName>
      <Addtodo></Addtodo>
      <Todoitemss todoItems={todoItems}></Todoitemss>
      
    </div>
  );
}

export default App;
