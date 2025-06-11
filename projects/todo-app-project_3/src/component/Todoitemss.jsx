import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./Todoitem"
import styles from "./Todoitemss.module.css";
const Todoitemss= ()=>{
  const {todoItems} = useContext(TodoItemsContext);

  return <>
   <div className={styles.items} >
    {
      todoItems.map(item =>
         <TodoItem
         key={item.name}
         todoDate={item.dueDate} 
         todoName={item.name} 
         ></TodoItem> )
    }
      </div>
  </>
};

export default Todoitemss;
