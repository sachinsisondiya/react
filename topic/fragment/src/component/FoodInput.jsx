import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
  
  return (
    <input
      type="text"
      placeholder="enter the item"
      className={styles.input}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
