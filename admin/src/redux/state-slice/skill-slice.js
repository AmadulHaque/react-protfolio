import {createSlice} from "@reduxjs/toolkit";
export const skillSlice=createSlice({
    name:'skill',
    initialState:{
        List:[],
        ListTotal:0,
        FormValue:{}
    },
    reducers:{
        SetskillList:(state,action)=>{
            state.List=action.payload
        },
        SetskillListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        OnChangeskillInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        skillDetailsValue:(state,action)=>{
            state.FormValue=action.payload
        }
    }
})

export  const {SetskillList,SetskillListTotal,OnChangeskillInput,skillDetailsValue}=skillSlice.actions;
export default  skillSlice.reducer;