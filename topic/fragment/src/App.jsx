import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './component/items';
import Msg from './component/msg';
import './App.css';
import Container from './component/container';
import FoodInput from './component/FoodInput';
  import { useState } from 'react';

function App() {
 //let fooditems=[];
 
// let textStateArr=useState("fixed item enterd by user");
// let textToShow= textStateArr[0];
// let setToShow= textStateArr[1];

let [foodItems,setToItems]=useState([]);

 const onKeyDown=(event) =>{
  if(event.key==="Enter"){
    let newFoodItems=event.target.value;
    event.target.value="";
    let newItems=[...foodItems,newFoodItems];
    setToItems(newItems);
 }
};
  
  //let message=fooditems.length===0 ? <h1>i am still hungry.</h1>:null;

  return (
    <>
     <Container>
     <h1 className="m-head">healthy food</h1>
     <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <Msg items={foodItems}></Msg>
    <Items name={foodItems}></Items>
    </Container>
    
    </> 
  );
}

export default App;