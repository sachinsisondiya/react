function Todoitem1() {
let todoName='buy milk';
let todoDate='4/20/2925';
  
  return (
  <div class="container text-center">
  <div class="row">
    <div class="col-4">
      {todoName}
    </div>
    <div class="col-4">
     {todoDate}
    </div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
  </div>)

}

export default Todoitem1;