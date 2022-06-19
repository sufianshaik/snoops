// import { applyMiddleware, combineReducers, createStore, MiddlewareArray } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";


const store = configureStore ( {
        reducer : {                 
            cart : cartReducer ,
            user :userReducer ,
        } ,
} 
      
);

export default store;