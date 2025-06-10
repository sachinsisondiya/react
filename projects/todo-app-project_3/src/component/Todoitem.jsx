import { AiOutlineDelete } from "react-icons/ai";
function TodoItem({todoName,todoDate,onDeleteClick}) {
  return (
  <div>
  <div class="row kg-row">
    <div class="col-4">
      {todoName}
    </div>
    <div class="col-4">
     {todoDate}
    </div>
    <div class="col-2"><button type="button" class="btn btn-danger kg-button" onClick={()=> onDeleteClick(todoName)}><AiOutlineDelete /></button></div>
  </div>
  </div>)

}

export default TodoItem;