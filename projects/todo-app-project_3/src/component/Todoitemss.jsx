import TodoItem from "./Todoitem"
import styles from "./Todoitemss.module.css";
const Todoitemss= ({todoItems})=>{
  return <>
   <div className={styles.items} >
    {
      todoItems.map(item => <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem> )
    }
      </div>
  </>
};

export default Todoitemss;
