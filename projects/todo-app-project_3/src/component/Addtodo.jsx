import { useState } from "react";
function Addtodo({ onNewItem }) {
  const [todoName,setTodoName]=useState();
  const [todoDate,setTodoDate]=useState();
  
  const handleTodoName =(event)=> {
    setTodoName(event.target.value);

  }

  const handleTodoDate =(event) =>{
    setTodoDate(event.target.value);

  } 
  
  const handleAddButtonClicked = () =>{
    onNewItem(todoName,todoDate);
    setTodoDate("");
    setTodoName("");
  }
  return (
    <div className="row kg-row">
      <div className="col-4">
        <input type="text" placeholder="enter todo here" onChange={handleTodoName} value={todoName}/>
      </div>
      <div className="col-4">
        <input type="date" onChange={handleTodoDate} value={todoDate}/>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Addtodo;
