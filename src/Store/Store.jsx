import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/CounterSlice'

const Store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default Store