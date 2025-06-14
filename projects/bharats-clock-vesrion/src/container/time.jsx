import { useState, useEffect } from "react";

function Time(){
  const [time,setTime]=useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTime(new Date());
    },1000);

    return () =>{
      clearInterval(intervalId);
    }
  }, []);
  return(
     <p>this is the current time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
  )
}

export default Time;