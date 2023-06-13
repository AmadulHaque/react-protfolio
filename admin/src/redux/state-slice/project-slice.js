import {createSlice} from "@reduxjs/toolkit";
export const projectSlice=createSlice({
    name:'project',
    initialState:{
        List:[],
        ListTotal:0,
        FormValue:{}
    },
    reducers:{
        SetProjectList:(state,action)=>{
            state.List=action.payload
        },
        SetProjectTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        OnChangeProjectInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        ProjectDetailsValue:(state,action)=>{
            state.FormValue=action.payload
        }
    }
})

export  const {SetProjectList,SetProjectTotal,OnChangeProjectInput,ProjectDetailsValue}=projectSlice.actions;
export default  projectSlice.reducer;