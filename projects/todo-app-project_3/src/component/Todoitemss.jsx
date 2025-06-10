import TodoItem from "./Todoitem"
import styles from "./Todoitemss.module.css";
const Todoitemss= ({todoItems,onDeleteClick})=>{
  return <>
   <div className={styles.items} >
    {
      todoItems.map(item =>
         <TodoItem
         key={item.name}
         todoDate={item.dueDate} 
         todoName={item.name} 
         onDeleteClick={onDeleteClick}
         ></TodoItem> )
    }
      </div>
  </>
};

export default Todoitemss;
