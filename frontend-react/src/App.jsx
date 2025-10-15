import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import privateRoute from './components/privateRoute'
import publicRoute from './components/publicRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/register' element={<publicRoute><Register/></publicRoute>}/>
      <Route path ="/login" element={<publicRoute><Login/></publicRoute>}/>
      <Route path = '/dashboard' element={<privateRoute><Dashboard/></privateRoute>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
    
    </>

  )
}

export default App
