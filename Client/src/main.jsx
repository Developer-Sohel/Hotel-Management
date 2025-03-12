import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayouts from './MainLayouts/MainLayouts.jsx'
import Login from './Pages/CreateAccount/Login/Login';
import Register from './Pages/CreateAccount/Register/Register';
import Homes from './Pages/Home/Homes/Homes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>

   <Route path='/' element={<MainLayouts />}>
   <Route path="/" element={<Homes />} />
   <Route path="/login" element={<Login />} />
   <Route path='/register' element={<Register/>}/>

  </Route>
   </Routes>
  </BrowserRouter>
  </StrictMode>,
)
