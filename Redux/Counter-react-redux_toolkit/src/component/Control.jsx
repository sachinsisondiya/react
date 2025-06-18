import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";

const Control = () =>{
  const dispatch=useDispatch();
  const inputElement=useRef();

  const handleIncriment = () =>{
   dispatch(counterActions.increment());
   

  }
  const handleDecrement = () =>{
    
    dispatch( counterActions.decrement());
  }

  const handlePrivacyToggle = () =>{
    console.log("hf");
    dispatch (privacyActions.toggle());
  }
  const handleAdd = () => {
    dispatch(
      counterActions.add( inputElement.current.value
      )
    );
    inputElement.current.value = '';
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value
    ));
    inputElement.current.value = '';
  };


  return <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={handleIncriment}>+1</button>
      <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-1</button>

      <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>privacy</button>

        </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
      <input type="text" placeholder="enter number" className="number-input"
      ref={inputElement}/>

      <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>

       
      <button type="button" className="btn btn-danger" onClick={handleSubtract}>SUBTRACT</button>

        </div>
    </>
  
}
export default Control;