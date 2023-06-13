
import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import taskReducer from "../state-slice/task-slice";
import summaryReducer from "../state-slice/summary-slice";
import profileReducer from "../state-slice/profile-slice";
import productReducer from "../state-slice/product-slice";
import skillReducer from "../state-slice/skill-slice";
import experienceReducer from "../state-slice/experience-slice";
import projectReducer from "../state-slice/project-slice";
import blogReducer from "../state-slice/blog-slice";
export default configureStore({
    reducer:{
        settings:settingsReducer,
        task:taskReducer,
        summary:summaryReducer,
        profile:profileReducer,
        product:productReducer,
        skill:skillReducer,
        experience:experienceReducer,
        project:projectReducer,
        blog:blogReducer,
    }

})