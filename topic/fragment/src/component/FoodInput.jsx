import styles from "./FoodInput.module.css";
const FoodInput = ({handleOnChange}) => {
  
  return (
    <input
      type="text"
      placeholder="enter the item"
      className={styles.input}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
