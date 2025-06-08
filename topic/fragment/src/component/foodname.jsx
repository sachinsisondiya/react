import styles from "./foodname.module.css";
const FoodName=({foodItems})=>{
   //destructuring array
   const handleBuyButton =(event) =>{
    console.log(event);
    console.log(` ${foodItems} being baught`);
   }

  return (
   
    <>
     <li className={`${styles["new-items"]} list-group-items`}><span className={styles['new-span']}>{foodItems}</span>
     <button type="button" className={`${styles.button} btn btn-info`}
     onClick={(event) => handleBuyButton(event)}>click</button>
     </li> 
    </>
  )
}
export default FoodName;