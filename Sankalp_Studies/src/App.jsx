import Hero from './Components/Hero/Hero.jsx'
import StudyRooms from './Components/StudyRooms/StudyRooms.jsx'
import Pricing from './Components/Pricing/Pricing.jsx'
import Contact from './Components/Contact/Contact.jsx'
import LICServices from './Components/LicServices/LICServices.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Hero/>}></Route>
        <Route path='/studyrooms' element={<StudyRooms/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/licservices' element={<LICServices/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Route>
    )
  )

  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <RouterProvider router={router}/>
    </div>
  )
}
