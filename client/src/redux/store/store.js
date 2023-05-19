import {configureStore} from "@reduxjs/toolkit";
import projectSlice from "../slice/project-slice.js";
import settingsReducer from "../slice/settings-slice.js";
import profileReducer from "../slice/profile-slice.js";
export default configureStore({
    reducer:{
        project:projectSlice,
        settings:settingsReducer,
        profile:profileReducer,
    }
})