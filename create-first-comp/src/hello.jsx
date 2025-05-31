function Hello(){
  let myName = 'sachin';
  let fullName = () => {
    return 'sachinsisondiya'

  }
  let number=21;
  
  return <h3>
    roll no {number}
    <br />
    MY NAME IS {myName}
    <br />
    MY FULL NAME IS {fullName()}
  </h3>
}
export default Hello;