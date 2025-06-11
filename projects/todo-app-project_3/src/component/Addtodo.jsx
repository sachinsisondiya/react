import { useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";

function Addtodo({ onNewItem }) {
  
  const todoNameElement=useRef();
  const todoDateElement=useRef();

  const handleAddButtonClicked = (event) =>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const todoDate=todoDateElement.current.value;
    todoNameElement.current.value="";
    todoDateElement.current.value="";
    onNewItem(todoName,todoDate);
   
  }
  return (
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
      <div className="col-4">
        <input type="text" ref={todoNameElement} placeholder="enter todo here" />
      </div>
      <div className="col-4">
        <input type="date" ref={todoDateElement} />
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
