import Card from '../components/card'
import './App.css'

function App() {

  return (
    <>
        <p className='bg-green-500 text-black rounded-sm pr-3 pl-4'>chai aur code</p>
        <Card bName="italic" bId="#201" bPrice="1000"></Card>
        <Card bName="marble" bId="#301" bPrice="2000"></Card>
        <Card bName="authentic" bId="#401" bPrice="3000"></Card>
    </>
  )
}

export default App
