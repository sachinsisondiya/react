import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './component/items';
import Msg from './component/msg';
import './App.css';
import Container from './component/container';

function App() {
 //let fooditems=[];
 let foodItems=["Dal","Vegetable","Froots","Milk","Salad"];
  
  //let message=fooditems.length===0 ? <h1>i am still hungry.</h1>:null;

  return (
    <>
     <Container>
     <h1 className="m-head">healthy food</h1>
    <Msg items={foodItems}></Msg>
    <Items name={foodItems}></Items>
    </Container>

    <Container>
      <p>Above is the list of healthy food</p>
    </Container>
    
    </>
   

    

   
  );
}

export default App;
