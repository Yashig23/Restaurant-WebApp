import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { About, Contact, Menu, Login, Signup, Review, Services, Nopage, Home, Order } from './Pages'
import DashBoard from './Pages/Dashboard/Dashboard'
import { ProtectedAdminRoute, ProtectedUserRoute } from './Components/ProtedtedRoute/ProtectedRoute'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='review' element={<ProtectedUserRoute><Review/></ProtectedUserRoute>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='*' element={<Nopage/>}/>
        <Route path='order' element={<ProtectedUserRoute><Order/></ProtectedUserRoute>}/>
        <Route path='dashboard' element={<ProtectedAdminRoute><DashBoard/></ProtectedAdminRoute>}/>
      </Routes>
      <ToastContainer/>
    </Router>
    
    </>
  )
}

export default App
