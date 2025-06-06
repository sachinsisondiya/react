function TodoItem2(){
  let itemName='go to school';
  let itemDate='26/05/205'
return (
   <div class="row kg-row">
    <div class="col-4">
      {itemName}
    </div>
    <div class="col-4">
      {itemDate}
    </div>
    <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
  </div>
)
}
export default TodoItem2;