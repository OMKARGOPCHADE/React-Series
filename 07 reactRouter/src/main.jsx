import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'react-router-dom'
import { createBrowserRouter } from "react-router";
import { createRoutesFromElements } from "react-router";
import { Route } from "react-router";
import { RouterProvider } from "react-router";
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx';
import Github,{githubInfoLoader} from './Components/Github/Github.jsx';
import User from './Components/User/User.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//      element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
