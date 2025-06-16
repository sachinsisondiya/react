
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from './component/Header';
import DisplayCounter from './component/DisplayCounter';
import Container from './component/Container';
import Control from './component/Control';

function App() {
 

  return (
    <>
  
  <center className="px-4 py-5 my-5 text-center">
    <Container>

    <Header></Header> 
       <div className="col-lg-6 mx-auto"> 
        <DisplayCounter></DisplayCounter>
        <Control></Control>  
        </div>
        </Container>
         </center>
   
   </>
  )
}

export default App
