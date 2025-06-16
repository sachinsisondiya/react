import { useDispatch } from "react-redux";

const Control = () =>{
  const dispatch=useDispatch();

  const handleIncriment = () =>{
    dispatch({type: "INCREMENT"})

  }
  const handleDecrement = () =>{
    dispatch ({type: "DECREMENT"});
  }

  return <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={handleIncriment}>+1</button>
      <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-1</button>

        </div>
    </>
  
}
export default Control;