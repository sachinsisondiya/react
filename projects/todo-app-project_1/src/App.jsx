import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import Addtodo from './component/Addtodo';
import Todoitem1 from './component/todoitem1';
import TodoItem2 from './component/todoitem2'
import './App.css';
function App() {
  

  return (
    <div className ="todo-container">
     <AppName></AppName>
        <Addtodo></Addtodo>
        <Todoitem1></Todoitem1>
        <TodoItem2></TodoItem2>
    </div>
  );   
}

export default App
