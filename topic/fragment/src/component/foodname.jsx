const FoodName=(props)=>{
   //destructuring array
    let {foodItem}=props;
  return (
   
    <>
     <li className="list-group-item">{foodItem}</li> 
    </>
  )
}
export default FoodName;