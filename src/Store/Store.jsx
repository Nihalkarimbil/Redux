import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/CounterSlice'
import FormSlice from './Slices/FormSlice';

const Store=configureStore({
    reducer:{
        counter:counterReducer,
        form :FormSlice
    }
})

export default Store