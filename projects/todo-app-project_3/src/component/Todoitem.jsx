import { AiOutlineDelete } from "react-icons/ai";
import {TodoItemsContext} from "../store/todo-items-store";
import { useContext } from "react";
function TodoItem({todoName,todoDate}) {
 const {deleteItem} = useContext(TodoItemsContext)
  return (
  <div>
  <div className="row kg-row">
    <div className="col-4">
      {todoName}
    </div>
    <div className="col-4">
     {todoDate}
    </div>
    <div className="col-2"><button type="button" className="btn btn-danger kg-button" onClick={()=> deleteItem(todoName)}><AiOutlineDelete /></button></div>
  </div>
  </div>)
//8 :20
}

export default TodoItem;