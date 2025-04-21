import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10);

  const addFn = ()=>{
    if(counter < 20 )counter = counter+1;
    setCounter(counter)
  }
  const removeFn =() =>{
    if(counter>0) counter = counter - 1;
    setCounter(counter)
  }
  return (
    <>
      <p>Counter : {counter}</p>
      <button onClick={addFn} id='b1'>Add</button>
      <button onClick={removeFn} id='b2'>Remove</button>
    </>
  )
}

export default App
