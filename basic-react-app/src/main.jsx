import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Om from './Om.jsx'
createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Om/>
    </>
)
