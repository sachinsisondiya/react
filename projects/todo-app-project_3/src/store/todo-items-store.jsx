import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext= createContext({
  todoItems:[],
  addNewItem: () => {},
  deleteItem: () =>{},
    
});

const todoItemsReducer = (currTodoItems,action) => {
  let newTodoItem = currTodoItems;
  if(action.type === 'NEW_ITEM'){
    newTodoItem = [
      ...currTodoItems,
      {name: action.payload.itemName,
        dueDate : action.payload.itemDate,
      }
     
    ];
  }
  else if (action.type === 'DELETE_ITEM'){
     newTodoItem = currTodoItems.filter(item => item.name !== action.payload.itemName);

  }
  return newTodoItem;
}

const TodoItemsContextProvider =({children}) =>{
 const [todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,[]);

  const addNewItem=(itemName,itemDate)=>{
    
    const newItemAction ={
      type : "NEW_ITEM",
      payload: {
        itemName,itemDate
      }
    };
    dispatchTodoItems(newItemAction);
      
    
  };

  const deleteItem=(todoItemName)=>{
   
    const deleteItemAction ={
      type : "DELETE_ITEM",
      payload: {
        itemName:todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);

  };
  return <TodoItemsContext.Provider 
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      {children}
    </TodoItemsContext.Provider>

}
export default TodoItemsContextProvider;