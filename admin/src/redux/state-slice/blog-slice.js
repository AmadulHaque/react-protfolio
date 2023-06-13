import {createSlice} from "@reduxjs/toolkit";
export const blogSlice=createSlice({
    name:'blog',
    initialState:{
        List:[],
        ListTotal:0,
        FormValue:{}
    },
    reducers:{
        SetblogList:(state,action)=>{
            state.List=action.payload
        },
        SetblogTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        OnChangeblogInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        blogDetailsValue:(state,action)=>{
            state.FormValue=action.payload
        }
    }
})

export  const {SetblogList,SetblogTotal,OnChangeblogInput,blogDetailsValue}=blogSlice.actions;
export default  blogSlice.reducer;