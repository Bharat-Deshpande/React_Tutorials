import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  

  // let counter = 15

  const addValue = () =>{
  // console.log("clicked: " + counter);  
  //counter = counter+1
  if(counter<20){
    setCounter(counter+1)
  }else{
    alert("Limit exceeded")
  }

  }

  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      alert("Limit exceeded")
    }
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
