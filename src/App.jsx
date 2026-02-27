import { useState } from 'react'
// import './App.css'

function App() {
  let [count,setcount]= useState(0)
  // let count = 5
  const addvalue = ()=>{
    setcount(count+1)
  }
  const removeValue = ()=>{
    setcount(count-1)
  }

  return (
    <>
      <h1>Coffe aur react</h1>
      <h2>counter value : {count}</h2>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
