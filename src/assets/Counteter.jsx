import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incriment,decriment, incrimentby5 } from '../Store/Slices/CounterSlice'

function Counteter() {
    const {value,value2} =useSelector((state)=>state.counter)
    const dispatch= useDispatch()
  return (
    <div>
        <h1>{value2}</h1>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(incriment())}>
            increment
        </button>
        <button onClick={()=>dispatch(decriment())}>
            decrement
        </button>
        <button onClick={()=>dispatch(incrimentby5())}>
            incrementby5
        </button>
    </div>
  )
}

export default Counteter