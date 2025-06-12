import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from './components/createpost';
import PostList from './components/PostList';
import { useState } from 'react';

function App() {

  const [selectedTab, setSelectedTab]=useState("Home");
  

  return (
    <>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ?<PostList></PostList>: <Createpost></Createpost> }
        
        
      <Footer></Footer>
      </div>
      
    </div>
     
     
     
        
    </>
  )
}

export default App
