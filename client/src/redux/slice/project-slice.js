
import {createSlice} from "@reduxjs/toolkit";
export const projectSlice=createSlice({
    name:'project',
    initialState:{
        value:[]
    },
    reducers:{
        ShowDetails:(state,action)=>{
            state.value=action.payload
        },
    }
})
export  const {ShowDetails}=projectSlice.actions;
export default  projectSlice.reducer;
