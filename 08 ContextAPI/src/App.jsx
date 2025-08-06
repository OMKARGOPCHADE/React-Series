import ContextProvider from './Context/ContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <>
    <ContextProvider>
      <h1>Omkar | Chai aur react</h1>
      <Login/>
      <Profile/>
    </ContextProvider>
    </>
  )
}

export default App
