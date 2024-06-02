import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Layout from './Components/Layout/Layout'
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom'
import { About, Contact, Menu, Review, Services, Nopage, Home, Order } from './Pages'
import AboutPage from './Pages/About/About'

function App() {


  return (
    <>
    <Router>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='menu' element={<Menu/>}/>
        {/* <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/> */}
        <Route path='review' element={<Review/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='*' element={<Nopage/>}/>
        <Route path='order' element={<Order/>}/>
      
      </Routes>
      
    </Router>
    
    </>
  )
}

export default App
