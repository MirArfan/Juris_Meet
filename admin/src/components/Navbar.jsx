import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { LawyerContext } from '../context/LawyerContext'
const Navbar = () => {

    const { aToken, setAToken } = useContext(AdminContext)
    const {lToken, setLToken}=useContext(LawyerContext)

    
    const navigate=useNavigate()
    
    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        lToken && setLToken('')
        lToken && localStorage.removeItem('lToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Lawyer'}</p>
            </div>
            <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar