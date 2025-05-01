import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllApointments from './pages/Admin/AllApointments';
import AddLawyers from './pages/Admin/AddLawyers';
import LawyersList from './pages/Admin/LawyersList';
import { LawyerContext } from './context/LawyerContext';
import LawyerDashboard from './pages/Lawyer/LawyerDashboard';
import LawyerAppointment from './pages/Lawyer/LawyerAppointment';
import LawyerProfile from './pages/Lawyer/LawyerProfile';



const App = () => {

  const { aToken } = useContext(AdminContext)
  const {lToken}=useContext(LawyerContext)

  return aToken || lToken ?(
    <div className='bg-[#f8f9fd]'>
      <ToastContainer />
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* Admin Route */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllApointments/>}/>
          <Route path='/add-lawyer' element={<AddLawyers/>}/>
          <Route path='/lawyer-list' element={<LawyersList/>}/>
          {/* Lawyer Route */}
          <Route path='/lawyer-dashboard' element={<LawyerDashboard/>}/>
          <Route path='/lawyer-appointments' element={<LawyerAppointment/>}/>
          <Route path='/lawyer-profile' element={<LawyerProfile/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App