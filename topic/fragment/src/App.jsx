import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';

function App() {
 let fooditems=[];
  //let fooditems=["Dal","Vegetable","Froots","Milk","Salad"];
  //let message=fooditems.length===0 ? <h1>i am still hungry.</h1>:null;

  return (
    <React.Fragment>
    <h1>healthy food</h1>
    {fooditems.length ===0 && <h1>i am still Hungry</h1>}
    
    <ul className="list-group">
      {fooditems.map((items)=> (
        <li key={items} className="list-group-item">{items}</li>

))}
  
  
</ul>
</React.Fragment>
  );
}

export default App;
