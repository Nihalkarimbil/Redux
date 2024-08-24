import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0,
        value2:5
    },
    reducers:{
        incriment:((state)=>{
            state.value += 1
        }),
        decriment:((state)=>{
            state.value -= 1
        }),
        incrimentby5:((state)=>{
            state.value2 +=5
        })
    }
})

export const {incriment,decriment,incrimentby5}=counterSlice.actions
export default counterSlice.reducer