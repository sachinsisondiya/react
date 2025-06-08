import styles from "./FoodInput.module.css";
const FoodInput= () => {
  const handleOnChange =(event)=>{
    console.log(event.target.value);

  };
  return(
    <input type="text" placeholder="enter the item" className={styles.input} 
    onChange={handleOnChange}
    />
  )
}

export default FoodInput;