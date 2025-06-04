function Time(){
  let time= new Date();
  return(
     <p>this is the current time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
  )
}

export default Time;