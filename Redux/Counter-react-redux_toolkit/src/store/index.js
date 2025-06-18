import  { configureStore , createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0},
  reducers : {
    increment: (state) =>{
      state.counterVal++;

    },
    decrement: (state) =>{
      state.counterVal--;

    },
     add: (state,action) =>{
      state.counterVal += Number((action.payload));

    },
    subtract: (state, action) =>{
      state.counterVal -= Number((action.payload));
    }
  }
});

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    toggle: (state)=>{
      console.log("yes");
      return state=!state;
    }
  }
});

// 
const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
  privacy: privacySlice.actions,

}});

export const privacyActions= privacySlice.actions;

export const counterActions = counterSlice.actions;

export default counterStore;



// const counterReducer= (store = INITIAL_VALUE,action) =>{
//   if(action.type === 'INCREMENT'){
//     return {...store,counter : store.counter +1 };
//   }
//   else if(action.type === 'DECREMENT'){
//     return {...store,counter : store.counter -1};
//   }
//   else if(action.type === 'ADD'){
//     return {...store,counter : store.counter + Number(action.payload.num)
//   }}
//    else if(action.type === 'SUBTRACT'){
//     return {...store,counter : store.counter - Number(action.payload.num)
//   }}
//    else if(action.type === 'PRIVACY'){
//     return {...store,privacy: !store.privacy};

//    }

//   return store;
// }