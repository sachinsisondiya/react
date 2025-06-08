import styles from "./foodname.module.css";
const FoodName=({foodItems})=>{
   //destructuring array

  return (
   
    <>
     <li className={`${styles["new-items"]} list-group-items`}><span className={styles['new-span']}>{foodItems}</span></li> 
    </>
  )
}
export default FoodName;