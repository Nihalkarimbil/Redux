import React from 'react'
import Counteter from './assets/Counteter'
import './App.css'
import Form from './assets/Form'
import { useSelector } from 'react-redux'


function App() {
  const {name,age}=useSelector((state)=>state.form)

  return (
    <div>
      <Counteter/>
      <Form/>
      <h3>name:{name}</h3>
      <h3>age:{age}</h3>
    </div>
    
  )
}

export default App
