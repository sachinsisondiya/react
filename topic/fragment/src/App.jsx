import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import Items from './component/items';
import Msg from './component/msg';

function App() {
 //let fooditems=[];
 let foodItems=["Dal","Vegetable","Froots","Milk","Salad"];
  
  //let message=fooditems.length===0 ? <h1>i am still hungry.</h1>:null;

  return (
    <React.Fragment>
    <h1>healthy food</h1>
    <Msg items={foodItems}></Msg>
    <Items name={foodItems}></Items>

</React.Fragment>
  );
}

export default App;
