import { useState } from 'react'
import './App.css'

function App() {
 let [counter,setCounter] = useState(10);
 const addFn = ()=>{
    if(counter >= 20) document.getElementById("msg").innerText="Counter Exceeds!";
    else{
      setCounter(counter+1);
     // document.getElementById('msg').innerText=`${counter}`;
    }
 }
 const removeFn = ()=>{
  if(counter <= 0 )document.getElementById('msg').innerText=`${counter} value below range!`;
  else{
     setCounter(counter-1);
     // document.getElementById('msg').innerText=`${counter}`;
  }
 }
  return (
    <>
      <p>Counter : {counter}</p>
      <br />
      <h1 id="msg">{counter}</h1>
      <br />
      <button onClick={addFn} id='b1'>Add</button>
      <button onClick={removeFn} id='b2'>Remove</button>
    </>
  )
}

export default App
