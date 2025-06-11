import { AiOutlineDelete } from "react-icons/ai";
function TodoItem({todoName,todoDate,onDeleteClick}) {
  return (
  <div>
  <div className="row kg-row">
    <div className="col-4">
      {todoName}
    </div>
    <div className="col-4">
     {todoDate}
    </div>
    <div className="col-2"><button type="button" className="btn btn-danger kg-button" onClick={()=> onDeleteClick(todoName)}><AiOutlineDelete /></button></div>
  </div>
  </div>)
//8 :20
}

export default TodoItem;