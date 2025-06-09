import styles from "./foodname.module.css";
const FoodName = ({ foodItems,bought, handleBuyButton }) =>{


  return (
    <>
      <li className={`${styles["new-items"]} list-group-item ${bought && "active"}`}>
        <span className={styles["new-span"]}>{foodItems}</span>
        <button
          type="button"
          className={`${styles.button} btn btn-info `}
          onClick= {handleBuyButton}
        >
          click
        </button>
      </li>
    </>
  );
};
export default FoodName;
