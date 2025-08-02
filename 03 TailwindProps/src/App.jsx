import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-red-500 font-bold text-amber-50'>Tailwind Css!</h1>
      <Card username="Omkar" btnText='Vist Me!'/>
      <Card username="Pratik" btnText='Meet Me!'/>
    </>
  )
}

export default App
