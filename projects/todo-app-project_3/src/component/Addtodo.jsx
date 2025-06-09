import { useState } from "react";
function Addtodo({ onNewItem }) {
  const [todoName,setTodoName]=useState();
  const [todoDate,setTodoDate]=useState();
  
  const handleTodoName =(event)=> {
    setTodoName(event.target.value);

  }

  const handleTodoDate =(event) =>{
    setTodoDate(event.target.value);

  } // 7:04






  return (
    <div className="row kg-row">
      <div className="col-4">
        <input type="text" placeholder="enter todo here" onChange={handleTodoName} />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleTodoDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={() => onNewItem("a", "b")}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Addtodo;
