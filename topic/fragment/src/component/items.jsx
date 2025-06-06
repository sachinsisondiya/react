import FoodName from "./foodname";
function Items({name}){
  //let fooditems=["Dal","Vegetable","Froots","Milk","Salad"];
  return (
    
     <ul className="list-group">
      {name.map((items)=> (
       <FoodName key={items} foodItems={items}></FoodName>
        ))}  
        </ul>

  );
}

export default Items;