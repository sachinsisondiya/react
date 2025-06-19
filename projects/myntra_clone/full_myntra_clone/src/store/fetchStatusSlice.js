import {createSlice} from "@reduxjs/toolkit";

const itemsSlice=createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone:false,
    currentlyFetching:false,
  },
  reducers: {
    markFetchDone: (store,action)=>{
      return store;
    },

    markFetchingStarted: (store,action)=>{
      return store;
    },
    markFetchingFinished: (store,action)=>{
      return store;
    },
  }

});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;

