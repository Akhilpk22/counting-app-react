import {createSlice} from "@reduxjs/toolkit"

 const counterSlice =createSlice({
    name:'Counter',
    initialState:{
        count:0
    },
    // to define action  
    reducers:{
        incerement:(state)=>{
            state.count += 1
        },
        decerement:(state)=>{
            state.count -= 1
        },
        reset:(state)=>{
            state.count = 0
        },
        incermentByAmount:(state,action)=>{
            state.count += action.payload
        }

    }
 })
 export const {incerement,decerement,reset,incermentByAmount} = counterSlice.actions
//  in default export in last working  in above to first to define no t working
 export default counterSlice.reducer