import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './projects/projectSlice';

const store=configureStore({
    reducer:{
        project:projectReducer
    }
})

export default store;