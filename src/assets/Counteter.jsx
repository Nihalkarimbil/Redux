import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incriment,decriment } from '../Store/Slices/CounterSlice'

function Counteter() {
    const count =useSelector((state)=>state.counter.value)
    const dispatch= useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(incriment())}>
            increment
        </button>
        <button onClick={()=>dispatch(decriment())}>
            decrement
        </button>
    </div>
  )
}

export default Counteter