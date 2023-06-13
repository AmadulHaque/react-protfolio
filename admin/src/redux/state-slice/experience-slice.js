import {createSlice} from "@reduxjs/toolkit";
export const experienceSlice=createSlice({
    name:'experience',
    initialState:{
        List:[],
        ListTotal:0,
        FormValue:{}
    },
    reducers:{
        SetexperienceList:(state,action)=>{
            state.List=action.payload
        },
        SetexperienceListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        OnChangeexperienceInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        experienceDetailsValue:(state,action)=>{
            state.FormValue=action.payload
        }
    }
})

export  const {SetexperienceList,SetexperienceListTotal,OnChangeexperienceInput,experienceDetailsValue}=experienceSlice.actions;
export default  experienceSlice.reducer;