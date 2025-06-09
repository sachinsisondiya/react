import {useState} from "react";
import FoodName from "./foodname";
function Items({name}){
   let [activeItems,setActiveItems]=useState([]);
   let onBuyButton = (items,event) => {
    let newItems =[...activeItems,items];
    setActiveItems(newItems);
   };
  return (
    
     <ul className="list-group">
      {name.map((items)=> (
       <FoodName key={items} foodItems={items}
       bought ={activeItems.includes(items)}
       handleBuyButton= {(event)=> onBuyButton(items,event)
       }></FoodName>
        ))}  
        </ul>

  );
}

export default Items;