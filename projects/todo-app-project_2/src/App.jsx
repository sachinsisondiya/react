import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './component/AppName';
import Addtodo from './component/Addtodo';
import TodoItem from './component/Todoitem';
import './App.css';
function App() {
  

  return (
    <div className ="todo-container">
     <AppName></AppName>
      <Addtodo></Addtodo>
      <div className="items-container">
        <TodoItem todoDate="4/10/2025" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="11/05/2025" todoName="Go to college"></TodoItem>
    
      </div>
      
    </div>
  );   
}

export default App
