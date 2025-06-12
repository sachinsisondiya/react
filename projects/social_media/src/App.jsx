import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from './components/createpost';
import PostList from './components/PostList';

function App() {
  

  return (
    <>
    <div className='app-container'>
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <Createpost></Createpost>
        <PostList></PostList>
      <Footer></Footer>
      </div>
      
    </div>
     
     
     
        
    </>
  )
}

export default App
