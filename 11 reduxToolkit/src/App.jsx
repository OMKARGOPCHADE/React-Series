import { useState } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React and react-redux | redux-toolkit</h1>
      <TodoContainer/>
    </>
  )
}

export default App
