import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

function Addtodo({ onNewItem }) {
  const [todoName,setTodoName]=useState('');
  const [todoDate,setTodoDate]=useState('');
  
  const handleTodoName =(event)=> {
    setTodoName(event.target.value);

  }

  const handleTodoDate =(event) =>{
    setTodoDate(event.target.value);

  } 
  
  const handleAddButtonClicked = (event) =>{
    event.preventDefault();
    onNewItem(todoName,todoDate);
    setTodoDate("");
    setTodoName("");
  }
  return (
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
      <div className="col-4">
        <input type="text" placeholder="enter todo here" onChange={handleTodoName} value={todoName}/>
      </div>
      <div className="col-4">
        <input type="date" onChange={handleTodoDate} value={todoDate}/>
      </div>

      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success kg-button"
      
        >
          <BiAddToQueue />
        </button>
      </div>
    </form>
  );
}

export default Addtodo;
