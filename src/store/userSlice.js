import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios' ;
// create HTTP POST req to login user
export const userLogin=createAsyncThunk('loginuser',async(userCredentialsObject,thunkApi)=>{
    let response = await axios.post('/user-api/login',userCredentialsObject);
    let data=response.data;  
    alert(data.message) ;  
    if (data.message==="success"){
    localStorage.setItem("token",data.payload);
    return data.userObj
    }
    if (data.message==="Invalid user" || data.message==="Invalid password"){
      return thunkApi.rejectWithValue(data)
    }
})
// the createAsyncThunk will return an async thunk which helps to understand the promise sent(i.e fulfill)

const userSlice=createSlice({
    name:'user',
    initialState:{
        userObj:{},
        isError:false,
        isSucces:false,
        isLoading:false,
        errMsg:''
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.isSucces=false;
            state.userObj=null;
            state.isError=false;
            state.errMsg='';
            return state;
        }
    },
    extraReducers:{
        [userLogin.pending]:(state,action)=>{
                state.isLoading=true;
        },
        [userLogin.fulfilled]:(state,action)=>{
                state.userObj=action.payload;
                state.isLoading=false;
                state.isError=false;
                state.isSucces=true;
                state.errMsg='';


        },
        [userLogin.rejected]:(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSucces=false;
            state.errMsg=action.payload.message
         },
}
})

//Export Action Creater
export const {clearLoginStatus} =userSlice.actions;  //Returns the action Creator Functions present in the reducers

//Export Reducer
export default userSlice.reducer