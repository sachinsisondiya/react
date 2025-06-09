import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import {useState} from "react";
function App() {
  let [calval,setcalval]=useState(["84",]);
  const onButtonClick=(buttonText) =>{
    if(buttonText === "c"){
      setcalval("");

    }
    else if(buttonText === "="){
      const result= eval(calval);
      setcalval(result);

    }
    else{
      const displayValue= calval+ buttonText;
      setcalval(displayValue);

    }
  }


  return (
    <>
    <div className={styles.calculator}>
      <Display display={calval}></Display>
      <ButtonContainer
      onButtonClick= {onButtonClick}></ButtonContainer>
     
    </div>
      
    </>
  )
}

export default App
