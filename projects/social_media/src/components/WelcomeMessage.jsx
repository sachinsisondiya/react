const WelcomeMessage= ({onGetPostClick})=>{
  return <center className="welcome">
    <h1 >there are no posts</h1>
    <button type="button" 
    onClick="onGetPostClick" className="btn btn-primary">Get Post From Server</button>

  </center>
}

export default WelcomeMessage;