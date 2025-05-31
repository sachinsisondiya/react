function Random(){
  let number=Math.random() * 10;
  return <p style={{'background-color':'#775526'}}>
    RANDOM NUMBER IS : {Math.round(number)}
  </p>

}
export default Random;