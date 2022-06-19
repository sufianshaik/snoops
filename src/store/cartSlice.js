const { createSlice } = require('@reduxjs/toolkit');
// import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            const exist = state.find((x)=> x.id == action.payload.id)
            if (exist){
                 return state.map((x)=>
                 x.id === action.payload.id ? {...x,qty :x.qty + 1 } : x
                 ) ;
            }
            else{
               return  [
                    ...state, 
                    {
                      ...action.payload ,
                      qty : 1 ,
                    }

                ]
               

            }
           
        },
        remove (state, action) {
            const obj1 = state.find((x) => x.id == action.payload) ;
            if (obj1.qty === 1 ) {
                return state.filter((item) => item.id !== obj1.id);
            }
           else{
               return state.map((x)=>
                 x.id == obj1.id ? {...x,qty : x.qty - 1} : x
               ) ;
           }
        },
    },
}
) ;

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;