import {configureStore} from "@reduxjs/toolkit";
import projectSlice from "../slice/project-slice.js"
export default configureStore({
    reducer:{
        project:projectSlice
    }
})