import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import Todoitemss from "./component/Todoitemss";
import "./App.css";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";

function App() {
  
  return (
    <TodoItemsContextProvider>
    <div className="todo-container">
      <AppName></AppName>
      <Addtodo ></Addtodo>
      <Todoitemss ></Todoitemss>
      <WelcomeMessage ></WelcomeMessage>
      
    </div>
    </TodoItemsContextProvider>
  );
}

export default App;
