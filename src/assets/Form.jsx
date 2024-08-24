import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submit } from '../Store/Slices/FormSlice'

function Form() {
    
    const [Name,setname]= useState('')
    const [Age,setage]=useState(0)
    const dispatch=useDispatch()

  return (
    <div>
        <input type='text' placeholder='enter the name' value={Name} onChange={(e)=>setname(e.target.value)}></input>
        <input type='text' placeholder='enter age' value={Age} onChange={(e)=>setage(e.target.value)}></input>
        <button onClick={()=>dispatch(submit({Name,Age}))}>submit</button>
        {/* <h2>name:{name}</h2>
        <h2>age:{age}</h2> */}
    </div>
  )
}

export default Form