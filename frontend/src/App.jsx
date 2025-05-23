import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Lawyers from './pages/Lawyers'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import PaymentFail from './pages/PaymentFail'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/lawyers/' element={<Lawyers/>} />
        <Route path='/lawyers/:speciality' element={<Lawyers/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/appointment/:lawId' element={<Appointment/>} />
        <Route path="/payment-success/:tranId" element={<PaymentSuccessPage />} />
        <Route path="/payment-failed/:tranId" element={<PaymentFail/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App