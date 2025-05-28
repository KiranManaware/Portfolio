import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectServices from "./projectServices";

const projectSlice=createSlice({
    name:"project",
    initialState:{
        uiProjects:[],
        websiteClone:[],
        frontendProject:[],
        fullstackProject:[],
        isLoading:false,
        isSuccess:false,
        isError:false,
        message:""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUiProject.pending,(state,action)=>{
            state.isLoading=true,
            state.isError=false,
            state.isSuccess=false
        }).addCase(getUiProject.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.uiProjects=action.payload
        }).addCase(getUiProject.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.message=action.payload
        }).addCase(getWebsiteProject.pending,(state,action)=>{
            state.isLoading=true,
            state.isError=false,
            state.isSuccess=false
        }).addCase(getWebsiteProject.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.websiteClone=action.payload
        }).addCase(getWebsiteProject.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.message=action.payload
        }).addCase(getFrontendProject.pending,(state,action)=>{
            state.isLoading=true,
            state.isError=false,
            state.isSuccess=false
        }).addCase(getFrontendProject.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.frontendProject=action.payload
        }).addCase(getFrontendProject.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.message=action.payload
        }).addCase(getFullStackProject.pending,(state,action)=>{
            state.isLoading=true,
            state.isError=false,
            state.isSuccess=false
        }).addCase(getFullStackProject.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.fullstackProject=action.payload
        }).addCase(getFullStackProject.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.message=action.payload
        })


    }
})

export const getUiProject=createAsyncThunk("UI/CLONES",async(_,thunkAPI)=>{
    try {
        return await projectServices.fetchUiClones();
    } catch (error) {
        const message=error.message.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})
export const getWebsiteProject=createAsyncThunk("WEBSITE/CLONES",async(_,thunkAPI)=>{
    try {
        return await projectServices.fetchWebsiteClones();
    } catch (error) {
        const message=error.message.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})
export const getFrontendProject=createAsyncThunk("FRONTEND/PROJECTS",async(_,thunkAPI)=>{
    try {
        return await projectServices.fetchFrontendProjects();
    } catch (error) {
        const message=error.message.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})
export const getFullStackProject=createAsyncThunk("FULLSTACK/PROJECTS",async(_,thunkAPI)=>{
    try {
        return await projectServices.fetchFullstackProjects();
    } catch (error) {
        const message=error.message.data.message;
        return thunkAPI.rejectWithValue(message)
    }
})

export default projectSlice.reducer;