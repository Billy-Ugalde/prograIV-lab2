import { StrictMode } from 'react'  // se invoca a libreria react
import { createRoot } from 'react-dom/client'   //libreria
import './index.css'
import App from './App.jsx'    //se vincula con app.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
